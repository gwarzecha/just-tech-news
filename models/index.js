const User = require('./User');
const Post = require('./Post');

// craete associations 
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// defines the relationship of the Post model to the User; post can belong to 1 user, not many
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// exports an object with the User model as a property
module.exports = { User, Post };