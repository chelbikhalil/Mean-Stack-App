const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://khalil:rouge2010@ds151908.mlab.com:51908/visitepreventive',['user']);

router.get('/user',(req, res, next) => {
    db.user.find((err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});
  
module.exports = router;