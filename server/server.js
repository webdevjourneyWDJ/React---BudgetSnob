const express = require('express');
const path = require('path')

const app = express();
const publicpath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000;

app.use(express.static(publicpath));

app.get('*', (req, res) =>{
    res.sendFile(path.join(publicpath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})