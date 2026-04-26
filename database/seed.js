const { sequelize, User, Post, Comment } = require('./models');
const bcrypt = require('bcrypt');

(async () => {
  await sequelize.sync({ force: true });

  const user = await User.create({
    email: 'test@test.com',
    password: await bcrypt.hash('123456', 10),
    role: 'admin'
  });

  const post = await Post.create({
    title: 'First Post',
    content: 'Hello world',
    UserId: user.id
  });

  await Comment.create({
    content: 'Nice post!',
    PostId: post.id,
    UserId: user.id
  });

  console.log('Database seeded');
})();
