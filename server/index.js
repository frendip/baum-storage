const express = require('express');

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send({ message: "init" })
})

app.listen(3000, () => {
    console.log(`Server started on port ${PORT}...`);
});
