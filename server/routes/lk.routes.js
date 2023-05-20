const { Router } = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const authMiddleware = require('../middleware/auth.middleware')
const db = require("../db");
const bcrypt = require("bcryptjs");

const router = Router()

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await db.models.user.findOne({
            where: {
                id_user: req.user.id_user
            },
            attributes: [
                'user_name',
                'email'
            ]
        })

        return res.status(200).json({ id: req.user.id_user, email: user.email, username: user.user_name })
    } catch (error) {
        console.log(`Can't get data, error: ${error}`)
        return res.status(500).json({ message: error })
    }
})

router.put('/me', authMiddleware, async (req, res) => {
    try {
        const { username, email, password } = req.body
        const protectedPassword = await bcrypt.hash(password, 12);
        await db.models.user.update({
                user_name: username,
                email: email,
                password: protectedPassword
            }, {
            where: {
                id_user: req.user.id_user
            }
        })

        return res.status(200).json({ message: `Successful update` })
    } catch (error) {
        console.log(`Can't get data, error: ${error}`)
        return res.status(500).json({ message: error })
    }
})

router.delete('/me', authMiddleware, async (req, res) => {
    try {
        await db.models.user.destroy({
            where: {
                id_user: req.user.id_user
            }
        })

        return res.status(200).json({ message: `Successful delete` })
    } catch (error) {
        console.log(`Can't get data, error: ${error}`)
        return res.status(500).json({ message: error })
    }
})

module.exports = router
