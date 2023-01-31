const express = require ('express');
const path = require('path');
const productRoutes = require('./src/routes/productRoutes')
const mainRoutes = require('./src/routes/mainRoutes')
const userRoutes = require('./src/routes/userRoutes')


const app = express ();

//const publicPath = path.resolve(__dirname,'./public');

//app.use(express.static(publicPath));
app.use( express.static('public') );
app.listen(3030, () => {
    console.log ('Servidor corriendo en el puerto 3030');
});

app.set('view engine', 'ejs')  
app.set('views',(__dirname,'./src/views'));
 
app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
});
app.use("/product", productRoutes);
app.use("/", mainRoutes);
app.use("/user", userRoutes);


