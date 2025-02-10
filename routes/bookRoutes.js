const express = require('express');
const { getBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle, addReview, deleteReview } = require('../controllers/bookController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);
router.post('/review/:isbn', protect, addReview);
router.delete('/review/:isbn', protect, deleteReview);

module.exports = router;
