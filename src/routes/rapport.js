const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://khalil:rouge2010@ds151908.mlab.com:51908/visitepreventive',['rapport']);

router.get('/rapport',(req, res, next) => {
    db.rapport.find((err, rapport) => {
        if (err) return next(err);
        res.json(rapport);
    });
});
    
module.exports = router;