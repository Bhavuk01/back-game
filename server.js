const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Apply CORS middleware
app.use(cors({
  origin: ['http://127.0.0.1:5500', 'https://minesh.netlify.app'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Manually defined keys for each validity period
const keysFor2Hours = [
  'AytLkXjQ', 'MbHpVoJr', 'sZcWfTnA', 'gNwQyLzE', 'DxTpFlmK',
  'JkYrBvQw', 'xRtZpGmB', 'UcLqEwJv', 'oPzKfXdN', 'HqRnVbLk',
  'MvBgSyEz', 'FwLpQnYx', 'dZjRbKhV', 'LkXyJwTn', 'pNfMqCvZ',
  'jRzGvLkB', 'CwXnPqHr', 'bJtLzFkM', 'YdPzTqLx', 'HnMkRbQx',
  'tLzPjRkQ', 'vJmXqLbR', 'dTzPjVkL', 'WkYpLxJr', 'RnFvJbKx',
  'TzQpLxVr', 'nJbYxLwK', 'XrLpVbQc', 'MvZpJxKr', 'qTzLxRnB',
  'JkVpLzMr', 'sXcQnRbL', 'vLxTqMzn', 'KfNwLrQx', 'YbJpZxMk',
  'QnXyLzBr', 'tKJvLxNp', 'ZcRkPbLy', 'xQmLzTnV', 'JbKfLpRv',
  'NpQxLzJv', 'tLzXyBrK', 'vJxLrQzM', 'WbNpQkLx', 'RzLkJvXy',
  'NqXyLzPb', 'JxLrQmKt', 'QbLxYpZr', 'TnJvLxQy', 'RmQxLzJk',
  'xLkTnPjR', 'LzQyRbJm', 'YpLxRzKv', 'JkNwLxQr', 'QxTnLzJb',
  'LmRzPjXy', 'TnLxQyJk', 'XbLzQpRj', 'pLxJvRzK', 'QkLxYnJm',
  'JvRzLxNp', 'bKxLzQyT', 'NwLxRzJk', 'LQxPjKrm', 'XyLzRbJt',
  'TnJkLxQy', 'RzPjLxQb', 'QmLxTnYk', 'JkLzNwRp', 'LxQyRzJm',
  'YbKxLzPj', 'XnQxLrJv', 'RmLzTnQy', 'LkPjQxYb', 'TzJvLxRn',
  'QxLzPjKc', 'JbNwLxQr', 'xLkYzRbT', 'TnLzQmPj', 'RzJkLxNp',
  'YpLxQyJr', 'QkLzRzJx', 'JvTnLxQr', 'LxKpRzYb', 'NmQxLzJk'
];

const keysFor1Day = [
  'BmTvLkQw', 'zPjKxRnL', 'WlNcVtJb', 'sXyLzRpQ', 'HqLpKbNz',
  'RmJvLxQp', 'XdLzMkQn', 'TnVbJxLr', 'kRzLqPjY', 'dXyLpJmQ',
  'NfTzJkLx', 'QrLxPjVb', 'sLpJmQxY', 'XkYzRvLw', 'tQnLpJbK',
  'ZmLxRkQy', 'BkLxQjNp', 'PzRvJxLk', 'xNwLQbTp', 'JkLzVpQx',
  'vLxTnRbQ', 'dXyPjLzR', 'WbQnJxLp', 'RmJxQkLy', 'LkVpTzNQ',
  'xRzLqKjM', 'pLxQbVnT', 'KfLzRjQx', 'YbLxTnJv', 'XnQkLpMz',
  'QzRjLxPb', 'LxNfTkJv', 'mQxLzPjR', 'bJxLkQnY', 'RvLxQkPz',
  'TnJbLxQy', 'zKxLQpRb', 'JmLzQxNp', 'XrLkPzQy', 'nLxTjQbK',
  'YbPzQkLx', 'dJxRkLQp', 'LxQmTzNb', 'pLkJxRzQ', 'BvLxQnTj',
  'RzLkPjYx', 'MxLQnTzP', 'JkLxRpQy', 'nQbLxZjT', 'XrLkPzQm',
  'TnJxLzRb', 'YxLzQpKj', 'LxJrQnPz', 'QxLzTnJk', 'JbKxLzQy',
  'RzLxQmNp', 'XyLpQnZr', 'TnLxJkPz', 'QxJmRzLk', 'LxPjQbTn'
];

const keysFor1Week = [
  'sXyLkQpN', 'LmQzRpJx', 'KbLxJvTn', 'xPzQjLrY', 'TnRkLxQm',
  'XdLzKpJv', 'JkLpQnRv', 'YbLxRzTm', 'QxLkPjNw', 'dRzLxKpQ',
  'JmLxQyRb', 'XnLQkPzT', 'pLxRzJvN', 'BkQmLxTp', 'LzRjXyQk',
  'TnPjLxQr', 'XbLkRzQy', 'dLxJpQnK', 'QkLzRpXm', 'YxLkTzQp',
  'MxJrLQbT', 'RzLxPjKy', 'NwLxQbTj', 'pQxLzRmJ', 'LkRzJvXy',
  'TnLxQpKb', 'XyJmLzRp', 'QxLkPzRj', 'JbLxTnQy', 'RmLkQxTz',
  'xLzRjPqK', 'NfTnQxLp', 'LxQbZrJp', 'vLkJxTzQ', 'JmLxNpQr',
  'RzQkLxYb', 'KxLzPjQn', 'XyLrQpNb', 'TnLxRzJk', 'QxLkTnJb',
  'dLxPjQyR', 'LbRzQxJk', 'mQxLzTnP', 'XnLkJpQr', 'YxLzRjQm',
  'LxQpRbTn', 'KbJmLxQy', 'TnRzQxLk', 'JxPzLrQm', 'RbLxQyTn',
  'LzQpNwRm', 'XyLkJrQy', 'QxTnLzJm', 'LxRzJkQy', 'nLxTjQbK',
  'YpLxQyJr', 'QkLzRzJx', 'JvTnLxQr', 'LxKpRzYb', 'NmQxLzJk'
];

const keysFor1Month = [
  'NwJxLzQp', 'XyLkQzRm', 'QpLzJxTk', 'LxRvJkQn', 'TnLxQyPz',
  'XbLkRpJm', 'JkLzQxTb', 'YxLzPjRm', 'QxRzLkNp', 'LkTnJxQb',
  'pLxQyRzJ', 'mJkLzQxN', 'RzQxLkYb', 'XyLxJmQp', 'TnQbLxRz',
  'LkJxQnYp', 'ZxLrQpKm', 'JmLzQxNp', 'QkLxRzTb', 'xLzNpJkQ',
  'TnPjLxQk', 'RbLxQyJm', 'LxJkQpNr', 'XyRzLkTn', 'QxLzNpJm',
  'dLxQyRbK', 'TnLxJkQp', 'JmRzLxQy', 'KbLzQpTb', 'LxJkQyNp',
  'QxLzRkTm', 'XyPjLrLk', 'TnQxLzJm', 'JkLxRpQy', 'LzQpNwRm',
  'xLkJrQyT', 'RbLxNpQk', 'QxTnLzJm', 'LxRzJkQy', 'nLxTjQbK',
  'YpLxQyJr', 'QkLzRzJx', 'JvTnLxQr', 'LxKpRzYb', 'NmQxLzJk',
  'xLzPjQyR', 'TnLxJkQp', 'JbLxRpQy', 'KxLzQpTb', 'LxJrTnQk',
  'QxLzRkYb', 'JkPzLxQr', 'NwLxRzJm', 'XyLkQyRp', 'LxQpNwJm',
  'TnJxLzQy', 'RzLkQxNp', 'QbLxJmTz', 'XyLzRpJk', 'LkTnQyRz'
];


// Combine keys and their validity periods into one object
const validKeys = {};

const addKeysToValidKeys = (keys, duration) => {
  keys.forEach(key => {
    validKeys[key] = { duration, firstUse: null };
  });
};

addKeysToValidKeys(keysFor2Hours, 2 * 60 * 60 * 1000); // 2 hours
addKeysToValidKeys(keysFor1Day, 24 * 60 * 60 * 1000);  // 1 day
addKeysToValidKeys(keysFor1Week, 7 * 24 * 60 * 60 * 1000); // 1 week
addKeysToValidKeys(keysFor1Month, 30 * 24 * 60 * 60 * 1000); // 1 month

app.options('/api/login', cors()); // Handle preflight request

app.post('/api/login', (req, res) => {
  const { key } = req.body;
  if (validKeys[key]) {
    const currentTime = Date.now();
    const keyData = validKeys[key];

    if (!keyData.firstUse) {
      // First use of the key
      keyData.firstUse = currentTime;
      res.json({ success: true, expirationTime: keyData.firstUse + keyData.duration });
    } else {
      // Check if the key has expired
      const expirationTime = keyData.firstUse + keyData.duration;
      if (currentTime <= expirationTime) {
        res.json({ success: true, expirationTime });
      } else {
        res.json({ success: false, message: 'Key has expired.' });
      }
    }
  } else {
    res.json({ success: false, message: 'Invalid key.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
