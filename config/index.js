var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return "mongodb+srv://" + configValues.uname + ":" + configValues.pwd + 
            "@node-todo-db-oislb.mongodb.net/" + configValues.uname + "?retryWrites=true&w=majority";
    }

}