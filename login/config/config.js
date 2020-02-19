const defaultJSON = require('./default.json');
const productionJSON = require('./production.json');
const developmentJSON = require('./development.json');
if(process.env.NODE_ENV == "production"){
    module.exports = productionJSON;
}
else if(process.env.NODE_ENV == "production"){
    module.exports = developmentJSON;
}
else{
    module.exports = defaultJSON;
}