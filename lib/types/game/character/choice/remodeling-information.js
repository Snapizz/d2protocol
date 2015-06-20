var BaseMessage = require('./remodeling-information.js').class,
  util = require('util');

var RemodelingInformation = function() {
  this.name = "";
  this.breed = 0;
  this.sex = false;
  this.cosmeticId = 0;
  this.colors = [];
};

util.inherits(RemodelingInformation, BaseMessage);

RemodelingInformation.prototype.serialize = function(output) {
  this.serializeAs_RemodelingInformation(output);
};

RemodelingInformation.prototype.deserialize = function(input) {
  this.deserializeAs_RemodelingInformation(input);
};

RemodelingInformation.prototype.serializeAs_RemodelingInformation = function(param1) {
  param1.writeUTF(this.name);
  param1.writeByte(this.breed);
  param1.writeBoolean(this.sex);
  if (this.cosmeticId < 0) {
    throw new Error("Forbidden value (" + this.cosmeticId + ") on element cosmeticId.");
  } else {
    param1.writeVarShort(this.cosmeticId);
    param1.writeShort(this.colors.length);
    var _loc2_ = 0;
    while (_loc2_ < this.colors.length) {
      param1.writeInt(this.colors[_loc2_]);
      _loc2_++;
    }
    return;
  }
};

RemodelingInformation.prototype.deserializeAs_RemodelingInformation = function(param1) {
  var _loc4_ = 0;
  this.name = param1.readUTF();
  this.breed = param1.readByte();
  this.sex = param1.readBoolean();
  this.cosmeticId = param1.readVarUhShort();
  if (this.cosmeticId < 0) {
    throw new Error("Forbidden value (" + this.cosmeticId + ") on element of RemodelingInformation.cosmeticId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readInt();
      this.colors.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

RemodelingInformation.prototype.getTypeId = function() {
  return 480;
};

RemodelingInformation.prototype.getClassName = function() {
  return 'RemodelingInformation';
};

module.exports.id = 480;
module.exports.class = RemodelingInformation;
module.exports.getInstance = function() {
  return new RemodelingInformation();
};