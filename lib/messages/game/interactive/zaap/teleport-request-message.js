var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

TeleportRequestMessage.prototype.serializeAs_TeleportRequestMessage = function(param1) {
  param1.writeByte(this.teleporterType);
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
  } else {
    param1.writeInt(this.mapId);
    return;
  }
};

TeleportRequestMessage.prototype.deserializeAs_TeleportRequestMessage = function(param1) {
  this.teleporterType = param1.readByte();
  if (this.teleporterType < 0) {
    throw new Error("Forbidden value (" + this.teleporterType + ") on element of TeleportRequestMessage.teleporterType.");
  } else {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
      throw new Error("Forbidden value (" + this.mapId + ") on element of TeleportRequestMessage.mapId.");
    } else {
      return;
    }
  }
};

TeleportRequestMessage.prototype.getMessageId = function() {
  return 5961;
};

TeleportRequestMessage.prototype.getClassName = function() {
  return 'TeleportRequestMessage';
};

module.exports.id = 5961;
module.exports.class = TeleportRequestMessage;
module.exports.getInstance = function() {
  return new TeleportRequestMessage();
};