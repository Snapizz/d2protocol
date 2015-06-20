var glob = require( 'glob' ),
    Q = require( 'q' ),
    path = require( 'path' );

var types = {}, self;

var ProtocolTypeManager = function () {
  self = this;
  this.types = {};
}

module.exports = {
  class: ProtocolTypeManager,
  instance: function(){
    return ProtocolTypeManager();
  }
};

ProtocolTypeManager.prototype.create = function (typeId) {
  var deferred = Q.defer();
  if(!self.types){
    throw new Error('Not initialized');
  }

  var t = self.types[typeId];
  if(!t)
  {
    throw new Error('Unknown type (ID ' + typeId + ')');
  }

  return t.getInstance();
}

ProtocolTypeManager.prototype.init = function () {
  var files = glob.sync(path.join(__dirname, 'types/**/*.js'));
  files.forEach(function (file) {
    var mType = require(file);
    self.types[mType.id] = mType;
  });
}