const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: '../images/bonnie-meisels-Y5uyOoct2pg-unsplash.jpg',
    },
    cuisines: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: 'Anytown'
    },
    state: {
        type: String,
        default: 'USA'
    },
    founded: {
        type: Number,
        min: [1672, 'Are you the oldest resturant in the US!?!?'],
        max: [new Date().getFullYear(), 'You are opening in the future!?!?']
    }
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)