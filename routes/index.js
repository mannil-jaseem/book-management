const express = require('express')
const router = express.Router()
const services = require('../services')

router.get('/getDetails', (req, res) => {
    res.send('hi')
})

// Add a new book (title, author, summary)
router.post('/add', services.addBooks)

// View a list of all books
// View details of a specific book by its ID
router.get('/list',services.list)

// Update a book's details
router.patch('/update/:id', services.update)

// Delete a book
router.delete('/delete/:id', services.delete)


module.exports = router