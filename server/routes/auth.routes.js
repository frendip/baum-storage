const { Router } = require('express')
const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === null || password === null) {
            return res.status(400).json({ message: `Incorrect data` })
        }

        const candidate = await db.models.user.findOne({
            where: {
                email: email
            },
            attributes: [
                'id_user',
                'password'
            ]
        });

        if (candidate === null) {
            return res.status(404).json({ message: `Invalid email or password` })
        }

        const user = candidate[0]

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(403).json({ message: `Invalid email or password` })
        }

        const jwtToken = jwt.sign({ userID: user.id },
            config.get('jwt'),
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token: jwtToken })
    } catch (error) {
        console.log(`Can't login, error: ${error}`)

        return res.status(500).json({ message: error })
    }
})

router.post('/registration', async (req, res) => {
    try {
        const { username, email, password } = req.body
        console.log(req.body)

        if (username === null || email === null || password === null) {
            return res.status(400).json({ message: `Incorrect data` })
        }

        const candidate = await db.models.user.findOne({
            where: {
                email: email
            },
            attributes: [
                'id_user'
            ]
        });

        if (candidate !== null) {
            return res.status(404).json({ message: `This email has already been registered` })
        }

        const user = await db.models.user.create({
            user_name: username,
            email: email,
            password: password
        });

        const jwtToken = jwt.sign({ userID: user.id_user },
            config.get('jwt'),
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token: jwtToken })
    } catch (error) {
        console.log(`Can't registration, error: ${error}`)

        return res.status(500).json({ message: error })
    }
})

module.exports = router
