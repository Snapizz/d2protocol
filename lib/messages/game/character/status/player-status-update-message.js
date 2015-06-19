var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PlayerStatusUpdateMessage = function() {
  this.accountId = 0;
  this.playerId = 0;
  this.status;
};

util.inherits(PlayerStatusUpdateMessage, BaseMessage);

PlayerStatusUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PlayerStatusUpdateMessage(output);
};

PlayerStatusUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PlayerStatusUpdateMessage(input);
};

PlayerStatusUpdateMessage.prototype.serializeAs_PlayerStatusUpdateMessage = function(output) {
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
};

PlayerStatusUpdateMessage.prototype.deserializeAs_PlayerStatusUpdateMessage = function(input) {
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of PlayerStatusUpdateMessage.accountId.")));
  };
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of PlayerStatusUpdateMessage.playerId.")));
  };
  var _id3 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id3);
  this.status.deserialize(input);
};

PlayerStatusUpdateMessage.prototype.getMessageId = function() {
  return 6386;
};

PlayerStatusUpdateMessage.prototype.getClassName = function() {
  return 'PlayerStatusUpdateMessage';
};

module.exports.id = 6386;
module.exports.class = PlayerStatusUpdateMessage;