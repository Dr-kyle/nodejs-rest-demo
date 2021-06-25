const esRoutes = require('./es_routes')
module.exports = function (app, esClients) {
  esRoutes(app, esClients);
}