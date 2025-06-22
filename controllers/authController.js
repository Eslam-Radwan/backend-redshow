const supabase = require('../config/supabaseClient.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res, next) => {
    try {
        const { First_Name, Last_Name, Email, Password } = req.body;
        if (!First_Name || !Last_Name || !Email || !Password) {
            const err = new Error('All fields are required')
            err.status = 400
            throw err
        }
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(Password, 10)
        const { data: user, error } = await supabase.from('User').insert([
            { First_Name, Last_Name, Email, Password: hashedPassword }
        ]).select()
        if (error) {
            const err = new Error(error.message || 'Signup failed')
            err.status = 400
            throw err
        }
        res.status(201).json({ message: 'User registered successfully.'})
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { Email, Password } = req.body;
        if (!Email || !Password) {
            const err = new Error('Email and password are required')
            err.status = 400
            throw err
        }
        const { data: user, error } = await supabase.from('User').select('*').eq('Email', Email)
        if (error) {
            const err = new Error(error.message || 'Login failed')
            err.status = 400
            throw err
        }
        if (!user || user.length === 0) {
            const err = new Error('Invalid email or password')
            err.status = 401
            throw err
        }
        const hashedPassword = user[0].Password
        const match = await bcrypt.compare(Password, hashedPassword)
        if (!match) {
            const err = new Error('Invalid email or password')
            err.status = 401
            throw err
        }
        // Generate JWT token for the user (excluding password)
        const payload = {
            id: user[0].id,
            First_Name: user[0].First_Name,
            Last_Name: user[0].Last_Name,
            Email: user[0].Email
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'default_secret', { expiresIn: '7d' })
        res.status(200).json({ message: 'User logged successfully', user: payload, token })
    } catch (error) {
        next(error)
    }
}

module.exports = { signup, login }
