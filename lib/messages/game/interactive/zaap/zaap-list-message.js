var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ZaapListMessage = function() {
  this.spawnMapId = 0;
};

util.inherits(ZaapListMessage, BaseMessage);

ZaapListMessage.prototype.serialize = function(output) {
  this.serializeAs_ZaapListMessage(output);
};

ZaapListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ZaapListMessage(input);
};

ZaapListMessage.prototype.serializeAs_ZaapListMessage = function(param1) {
  this.serializeAs_TeleportDestinationsListMessage(param1);
  if (this.spawnMapId < 0) {
    throw new Error("Forbidden value (" + this.spawnMapId + ") on element spawnMapId.");
  } else {
    param1.writeInt(this.spawnMapId);
    return;
  }
};

ZaapListMessage.prototype.deserializeAs_ZaapListMessage = function(param1) {
  this.deserialize(param1);
  this.spawnMapId = param1.readInt();
  if (this.spawnMapId < 0) {
    throw new Error("Forbidden value (" + this.spawnMapId + ") on element of ZaapListMessage.spawnMapId.");
  } else {
    return;
  }
};

ZaapListMessage.prototype.getMessageId = function() {
  return 1604;
};

ZaapListMessage.prototype.getClassName = function() {
  return 'ZaapListMessage';
};

module.exports.id = 1604;
module.exports.class = ZaapListMessage;
module.exports.getInstance = function() {
  return new ZaapListMessage();
};