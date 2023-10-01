const router = require('express').Router();
const { authMiddleware } = require('./utils/auth');

// Import your GraphQL mutations and queries
const { createNewUser, login, getMe, saveBook, removeBook } = require('../../controllers/user-controller');

// Use GraphQL mutations and queries with Apollo Server
router.post('/signup', createNewUser); // Use the createNewUser mutation for user signup

router.post('/login', login); // Use the login mutation for user login

router.get('/me', authMiddleware, getMe); // Use the getMe query to get the authenticated user's data

router.post('/books', authMiddleware, saveBook); // Use the saveBook mutation to save a book

router.delete('/books/:bookId', authMiddleware, removeBook); // Use the removeBook mutation to remove a saved book

module.exports = router;