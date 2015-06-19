var d2com = require('d2com'),
  BaseMessage = require('./teleport-destinations-list-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ZaapListMessage.prototype.serializeAs_ZaapListMessage = function(output) {
  this.serializeAs_TeleportDestinationsListMessage(output);
  if (this.spawnMapId < 0) {
    throw (new Error((("Forbidden value (" + this.spawnMapId) + ") on element spawnMapId.")));
  };
  output.writeInt(this.spawnMapId);
};

ZaapListMessage.prototype.deserializeAs_ZaapListMessage = function(input) {
  this.deserialize(input);
  this.spawnMapId = input.readInt();
  if (this.spawnMapId < 0) {
    throw (new Error((("Forbidden value (" + this.spawnMapId) + ") on element of ZaapListMessage.spawnMapId.")));
  };
};

ZaapListMessage.prototype.getMessageId = function() {
  return 1604;
};

ZaapListMessage.prototype.getClassName = function() {
  return 'ZaapListMessage';
};

module.exports.id = 1604;
module.exports.class = ZaapListMessage;