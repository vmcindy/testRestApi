'use strict';

module.exports = function(app) {
    var posts = require('../controllers/postsController');

    app.route('/posts')
        .get(posts.all_posts)
        .post(posts.create_post);

    app.route('/posts/:postId')
        .get(posts.read_post)
        .put(posts.update_post)
        .delete(posts.delete_post);

};