const ip = require('ip'); 
   const dns = require('dns'); 


// inside middleware handler
const ipMiddleware = function(req, res, next) {
 

dns.lookup(require('os').hostname(), (err, add, fam) => {
  req.body.IP=add
});
    next();
};

module.exports={ipMiddleware}