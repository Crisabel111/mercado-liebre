const path = require('path');
const mainControllers = {

  home:  (req,res) => {
    res.render('home');
},
};

module.exports = mainControllers;