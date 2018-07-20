//route-level middleware
var middleware = {
    requireAuthentication: function(req, res, next) {
      console.log('Private route hit');
      next();
    },
    logger: function(req, res, next) {
      var date = new Date().toString();
      var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(ip + ' - - [' + date + '] ' + req.method + ' ' + req.originalUrl);
      next();
    }
};

module.exports = middleware;
