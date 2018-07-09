const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://khalil:rouge2010@ds151908.mlab.com:51908/visitepreventive',['planning']);

router.get('/planning',(req, res, next) => {
    db.planning.find((err, planning) => {
        if (err) return next(err);
        res.json(planning);
    });
});
    router.get('planning/:id',(req, res, next) => {
        db.planning.findOne({_id: mongojs.ObjectId( req.params.id)}, (err, planning) => {
            if (err) return next(err);
            res.json(planning);
        });

});

router.post('/planning', (req, res, next) => {
    const planning= req.body;
    if (!planning.nomC || !(planning.technologie +'')) {
        res.status(400).json({
            error : 'bad data'
        });
    }else {
        db.planning.save(planning, (err, planning) => {
           if (err) return next(err);
            res.json(planning);
        }) ;
    }

});

router.delete('/planning/:id', (req, res, next) => {
    db.planning.remove({'_id' :new mongojs.ObjectId(req.params.id)}, (err, result) => {
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