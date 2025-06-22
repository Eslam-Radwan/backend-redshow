const supabase = require('../config/supabaseClient.js')

const signup = async (req, res, next) => {
    try {
        const { First_Name, Last_Name, Email, Password } = req.body;
        const { data: user, error } = await supabase.from('User').insert([
            { First_Name, Last_Name, Email, Password }
        ]).select()
        if (error) {
            const err = new Error(error.message || 'Signup failed')
            err.status = 400
            throw err
        }
        res.status(201).json({ message: 'User registered successfully.', user: user })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { Email, Password } = req.body;
        const { data: user, error } = await supabase.from('User').select('*').is('Email', Email)
        if (error) {
            const err = new Error(error.message || 'Login failed')
            err.status = 400
            throw err
        }
        res.status(201).json({ message: 'User logged successfully', user: user })
    } catch (error) {
        next(error)
    }
}

module.exports = { signup, login }
