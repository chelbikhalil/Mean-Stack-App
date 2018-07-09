const express = require('express');
const cors = require('cors');
const app = express();
const path = require ('path');

const indexRoute = require("./routes/index");
const  intervenantRoute =  require("./routes/intervenant");
const  sitRoute = require("./routes/sit");
const  planningRoute = require("./routes/planning");
const clientsRoute = require("./routes/clients");
const userRoute = require("./routes/user");
const rapportRoute = require("./routes/rapport");
//setting 
app.use(express.static(path.join(__dirname, 'views')));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'ejs');

//midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes

app.use(indexRoute);
app.use('/api', rapportRoute);
app.use('/api' , intervenantRoute);
app.use('/api' , clientsRoute);
app.use('/api' , sitRoute);
app.use('/api', planningRoute);
app.use('/api', userRoute);


app.listen(app.get('port'), () => {
    console.log('server on in ', app.get('port'));
});