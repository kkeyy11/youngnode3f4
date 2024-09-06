const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index', { title: 'Portfolio' });
});

app.get('/social', (req, res) => {
    res.render('social', { title: 'Social Media Accounts' });
});

app.get('/personalinfo', (req, res) => {
    res.render('personalinfo', { title: 'Personal Information' });
});

app.get('/special', (req, res) => {
    res.render('special', { title: 'Special Mention' });
});

app.get('/gameinfo', (req, res) => {
    res.render('gameinfo', { title: 'Game Profiles' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
