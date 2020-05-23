//MODULOS
const express = require('express');
const app = express();
const path = require('path');

//CONFIGURACIONES
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//RUTAS
app.use(require('./routes/index'));

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//SERVIDOR
app.get('*', (req, res) => {
   res.end('ERROR 404');
})

app.listen(app.set('port'), () => {
   console.log('Puerto en: ' + app.set('port'));
});

