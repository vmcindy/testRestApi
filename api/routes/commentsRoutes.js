'use strict';

module.exports = function(app) {
    var comments = require('../controllers/commentsController');

    app.route('/comments')
        .get(comments.all_comments)
        .post(comments.create_comment);

    app.route('/comments/:commentId')
        .get(comments.read_comment)
        .put(comments.update_comment)
        .delete(comments.delete_comment);

    app.route('/posts/:postId/comments')
        .get(comments.read_post_comments);

};