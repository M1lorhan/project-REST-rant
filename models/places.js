/*module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/emy-XoByiBymX20-unsplash.jpg' 
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/heather-m-edwards-TsSvA6l6fTc-unsplash.jpg'
}]*/

const mongoose = require('mongoose')
const placeScehma = new mongoose.Schema({
    name: {type: String, required: true},
    pic: String,
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: Number
})

module.exports = mongoose.model('Place', placeScehma)