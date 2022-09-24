const express = require('express');

const app = express(); // se crea instancia de express
const cors = require('cors')
const fileUpload = require('express-fileupload')
/**
 * importación de rutas
 */
const TipoEquipo = require ('./Routes/RutasTipoEquipo');
const Usuario = require ('./Routes/RutasUsuario');
const MarcaEquipo = require ('./Routes/RutasMarcaEquipo');
const EstadoEquipo = require ('./Routes/RutasEstadoEquipo');
const Inventario = require ('./Routes/RutasInventario');

/**
 * middlewares
 */
 app.use(express.urlencoded({extended: false}))
 app.use(express.json())
 app.use(fileUpload({
     useTempFiles: true,
     tempFileDir: '/tmp/'
 }))
 app.use(cors({
     origin: '*'
 }))
 
/**
 * Utilizar sustantivos en plural para una URI
 */
app.use('/api/TipoEquipo', TipoEquipo);
app.use('/api/Usuario', Usuario);
app.use('/api/MarcaEquipo', MarcaEquipo);
app.use('/api/EstadoEquipo', EstadoEquipo);
app.use('/api/Inventario', Inventario);



module.exports = app;