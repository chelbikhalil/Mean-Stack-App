const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://khalil:rouge2010@ds151908.mlab.com:51908/visitepreventive',['clients']);




router.get('/clients',(req, res, next) => {
    db.clients.find((err, clients) => {
        if (err) return next(err);
        res.json(clients);
    });
});
    router.get('clients/:id',(req, res, next) => {
        db.clients.findOne({_id: mongojs.ObjectId( req.params.id)}, (err, clients) => {
            if (err) return next(err);
            res.json(task);
        });

});

router.post('/clients', (req, res, next) => {
    const clients = req.body;
    if (!clients.nomC || !(clients.Adresse +'')) {
        res.status(400).json({
            error : 'bad data'
        });
    }else {
        db.clients.save(clients, (err, clients) => {
           if (err) return next(err);
            res.json(clients);
        }) ;
    }

});

router.delete('/clients/:id', (req, res, next) => {
    db.clients.remove({'_id' :new mongojs.ObjectId(req.params.id)}, (err, result) => {
        if (err) return next(err);
            res.json(result);
    });
});

router.put('/clients/:id', (req, res, next) => {
    const clients = req.body;
 /**   const updateclients = {};
    if (clients.checked){
        updateclients.checked= clients.checked;
    }
    if (clients.nomC){
        updateclients.nomC = clients.nomC;
    }
    if (clients.Adresse){
        updateclients.Adresse = clients.Adresse;
    }
    if (clients.Type_payement){
        updateclients.Type_payement = clients.Type_payement;
    }
    if(!updateclients){
        res.status(400).json({
            error : 'bad request'
        });
       
    } else {
        **/
        db.clients.update({'_id' : mongojs.ObjectId(req.params.id)},updateclients ,(err, clients) => {
           if (err) return next(err);
               res.json(clients);
        });
    }

);

module.exports = router;