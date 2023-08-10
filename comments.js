// Create web server
var express = require('express');
var router = express.Router();

// Import comments
var comments = require('../models/comments');

// Get all comments
router.get('/', function(req, res) {
    comments.getAll(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comment by id
router.get('/:id', function(req, res) {
    comments.getById(req.params.id, function(err, row) {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

// Create comment
router.post('/', function(req, res) {
    comments.create(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

// Update comment by id
router.put('/:id', function(req, res) {
    comments.update(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Delete comment by id
router.delete('/:id', function(req, res) {
    comments.delete(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

module.exports = router;
