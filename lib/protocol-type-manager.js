var glob = require( 'glob' ),
    Q = require( 'q' ),
    path = require( 'path' );

var types = {}, self;

var ProtocolTypeManager = function () {
  self = this;
}

module.exports = ProtocolTypeManager;

ProtocolTypeManager.prototype.create = function (typeId) {
  var deferred = Q.defer();
  if(!self.types){
    return init().then(function (types) {
      self.types = types;
      return self.create(typeId);
    })
  }

  var Type = self.types[typeId];
  if(!Type)
  {
    deferred.reject('Unknown type (ID ' + typeId + ')');
  }
  else{
    deferred.resolve(new Type());
  }

  return deferred.promise;
}

function init () {
  var deferred = Q.defer();

  glob(path.join(__dirname, 'types/**/*.js'), function( err, files ) {
    if(err){
      deferred.reject(err);
      return;
    }
    var types = {};
    files.forEach(function (file) {
      var mType = require(file);
      types[mType.id] = mType.class;
    });
    deferred.resolve(types);
  });

  return deferred.promise;
}