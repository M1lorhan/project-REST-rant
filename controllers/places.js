const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
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
    }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router
