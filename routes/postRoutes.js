const router = require('express').Router();
const { Post } = require('../database/models');
const auth = require('../middleware/auth');

// CREATE
router.post('/', auth, async (req, res) => {
  const post = await Post.create({ ...req.body, UserId: req.user.id });
  res.status(201).json(post);
});

// READ ALL
router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// UPDATE
router.put('/:id', auth, async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (post.UserId !== req.user.id) {
    return res.status(403).json({ error: 'Not yours' });
  }

  await post.update(req.body);
  res.json(post);
});

// DELETE
router.delete('/:id', auth, async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  await post.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;
