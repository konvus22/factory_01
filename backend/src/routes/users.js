const { Router } = require('express');
const router = Router();

router.get('/me', (req, res) => {
  res.json({ id: 'user-1', name: 'Demo User' });
});

module.exports = router;
