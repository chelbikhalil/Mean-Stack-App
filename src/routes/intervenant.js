const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://khalil:rouge2010@ds151908.mlab.com:51908/visitepreventive',['intervenant']);



router.get('/intervenant',(req, res, next) => {
    db.intervenant.find((err, intervenant) => {
        if (err) return next(err);
        res.json(intervenant);
    });
});
    router.get('/intervenant/:id',(req, res, next) => {
        db.intervenant.findOne({_id: mongojs.ObjectId( req.params.id)}, (err, intervenant) => {
            if (err) return next(err);
            res.json(task);
        });

});

router.post('/intervenant', (req, res, next) => {
    const intervenant = req.body;
    if (!intervenant.Email || !(intervenant.FirstName +'')) {
        res.status(400).json({
            error : 'bad data'
        });
    }else {
        db.intervenant.save(intervenant, (err, intervenant) => {
           if (err) return next(err);
            res.json(intervenant);
        }) ;
    }

});

router.delete('/intervenant/:id', (req, res, next) => {
    db.intervenant.remove({_id : mongojs.ObjectId(req.params.id)}, (err, result) => {
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