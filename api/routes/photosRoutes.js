'use strict';

module.exports = function(app) {
    var photos = require('../controllers/photosController');

    app.route('/photos')
        .get(photos.all_photos);

    app.route('/photos/:photoId')
        .get(photos.read_photo);

};