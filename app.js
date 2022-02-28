const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const hospitalRoutes = require('./routes/hospital');


const hospitalController = require('./controllers/hospital');
const errorController = require('./controllers/error');



app.use(hospitalRoutes);

app.use(errorController.get404);
app.listen(3000);

// .then(result=>{
//     app.listen(3000);
//    })
//    .catch(err => {
//      console.log(err);
//    });




 