const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sample_db')
    .then(function () {
        console.log("Connected to database");
    })
    .catch(function (err) {
        console.log("Connection failed", err);
    });


const Schema = mongoose.Schema;
let kullaniciSchema = new Schema({
    adi: String,
    soyadi: {text: String},
    yasi: Number,
    eposta: {type: String, required: [true, 'E-posta alanı zorunludur.']}
});

let Kullanici = mongoose.model('kullanici', kullaniciSchema);

Kullanici.create({adi: 'Yusuf', soyadi: 'Sezer', yasi: 75, eposta: 'yusufsezer@mail.com'})
    .catch(err => {
        console.log(err,'Insert error');
    })
    .then(result => {
        console.log(result);
    });