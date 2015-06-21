var glob = require( 'glob' ),
    path = require( 'path' );

var ProtocolTypeManager = module.exports = function () {
  var types = this.types = {};
  var files = glob.sync(path.join(__dirname, 'types/**/*.js'));
  files.forEach(function (file) {
    var mType = require(file);
    types[mType.id] = mType;
  });
}

module.exports = function () {
  return new ProtocolTypeManager();
};

module.exports.ProtocolTypeManager = ProtocolTypeManager;

ProtocolTypeManager.prototype.get = function (typeId) {
  if(!this.types){
    throw new Error('Not initialized');
  }
  var mtype = this.types[typeId];
  if(!mtype)
  {
    throw new Error('Unknown type (ID ' + typeId + ')');
  }

  return mtype;
}