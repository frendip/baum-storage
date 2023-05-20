const express   = require('express');
const config    = require('config');

const PORT      = config.get('port') || 3000
const app       = express()

app.use(express.json());
app.use('/auth', require('./routes/auth.routes'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});