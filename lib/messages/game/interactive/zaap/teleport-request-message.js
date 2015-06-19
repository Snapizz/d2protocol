var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportRequestMessage = function() {
  this.teleporterType = 0;
  this.mapId = 0;
};

util.inherits(TeleportRequestMessage, BaseMessage);

TeleportRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportRequestMessage(output);
};

TeleportRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportRequestMessage(input);
};

TeleportRequestMessage.prototype.serializeAs_TeleportRequestMessage = function(output) {
  output.writeByte(this.teleporterType);
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
};

TeleportRequestMessage.prototype.deserializeAs_TeleportRequestMessage = function(input) {
  this.teleporterType = input.readByte();
  if (this.teleporterType < 0) {
    throw (new Error((("Forbidden value (" + this.teleporterType) + ") on element of TeleportRequestMessage.teleporterType.")));
  };
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of TeleportRequestMessage.mapId.")));
  };
};

TeleportRequestMessage.prototype.getMessageId = function() {
  return 5961;
};

TeleportRequestMessage.prototype.getClassName = function() {
  return 'TeleportRequestMessage';
};

module.exports.id = 5961;
module.exports.class = TeleportRequestMessage;