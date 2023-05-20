const express   = require('express');
const config    = require('config');
const cors      = require('cors')

const PORT      = config.get('port') || 3000
const app       = express()

app.use(cors())
app.use(express.json());
app.use('/auth', require('./routes/auth.routes'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
