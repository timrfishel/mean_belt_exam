
const mongoose = require('mongoose'),
        fs = require('fs'),
        path = require('path');

module.exports = (() => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/beltpet');

    const models_path = path.join(__dirname, './../models');
    
    fs.readdirSync(models_path).forEach((file) => {
        if(file.indexOf('.js') >= 0) {
            
            require(models_path + '/' + file);
        }
    });
})();