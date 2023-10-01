const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhhhh';

module.exports = {
  authMiddleware: function ({ req }) {
    // Retrieve the token from the request headers
    const token = req.headers.authorization || '';

    if (!token) {
      return null; // No token provided, user is not authenticated
    }

    try {
      // Verify the token and decode user information
      const { data } = jwt.verify(token, secret);
      return { user: data };
    } catch (err) {
      throw new AuthenticationError('Invalid token'); // Invalid token
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret);
  },
};