const express = require('express');
const path = require('path');

const app = express(); //crear una instancia de la aplicacion express

const PORT = 3000;

// Para que carguen los estilos
app.use(express.static(path.join(__dirname, 'public')));
//configurar Express para que procese los datos del formulario en formato URL
app.use(express.urlencoded({ extended : true})); // middleware que permite a express entender datos enviados- 
//definir la ruta para servir el archivo html
app.get('/',(req,res) => {
    //envia el archivo formulario.html al cliente
    res.sendFile(path.join(__dirname, 'form.html'))//
});

//define la ruta para procesar el envio del formulario
app.post('/registro', (req, res) => {
    //accede a los datos enviados en el formulario
    const datosRegistro = req.body;
    console.log("datos recibidos ",datosRegistro);
    res.send(`<h1>Registro completado</h1>
                <p><strong>Nombre completo:</strong> ${datosRegistro.nombre_completo}</p>
                <p><strong>Edad:</strong> ${datosRegistro.edad}</p>
                <p><strong>Correo electrónico:</strong> ${datosRegistro.email}</p>
                <p><strong>Curso seleccionado:</strong> ${datosRegistro.curso}</p>`
            );
});

app.listen(PORT, () => {
    console.log(`servidor funcionando en http://localhost:${PORT}`);
});

