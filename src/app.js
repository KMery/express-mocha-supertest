const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.use('/users', require('./routes/users'));

app.listen(app.get('port'), (req, res) => {
    console.log(`Server on ${app.get('port')}`);
});

module.exports = app;