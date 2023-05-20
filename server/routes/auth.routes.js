const { Router } = require('express')
const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
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



module.exports = router
