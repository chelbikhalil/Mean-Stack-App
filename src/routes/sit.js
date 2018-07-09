const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://khalil:rouge2010@ds151908.mlab.com:51908/visitepreventive',['sit']);

router.get('/sit',(req, res, next) => {
    db.sit.find((err, sit) => {
        if (err) return next(err);
        res.json(sit);
    });
});
    router.get('sit/:id',(req, res, next) => {
        db.sit.findOne({_id: mongojs.ObjectId( req.params.id)}, (err, sit) => {
            if (err) return next(err);
            res.json(sit);
        });

});

router.post('/sit', (req, res, next) => {
    const sit= req.body;
    if (!sit.nomC || !(sit.technologie +'')) {
        res.status(400).json({
            error : 'bad data'
        });
    }else {
        db.sit.save(sit, (err, sit) => {
           if (err) return next(err);
            res.json(sit);
        }) ;
    }

});

router.delete('/sit/:id', (req, res, next) => {
    db.sit.remove({'_id' :new mongojs.ObjectId(req.params.id)}, (err, result) => {
        if (err) return next(err);
            res.json(result);
    });
});
/** 
router.put('/intervenant/:id', (req, res, next) => {
    const intervenant = req.body;
    const updateintervenant = {};
    if (task.isDone){
        updateTask.isDone = task.isDone;
    }
    if (task.title){
        updateTask.title = tasks.title;
    }
    if (!task.isDone){
        res.status(400).json({
            error : 'bad request'
        });
        console.log(title);
    } else {
        db.tasks.update({_id : mongojs.ObjectId(req.params.id)}, (err, task) => {
           if (err) return next(err);
               res.json(task);
        });
    }

});
*/
module.exports = router;