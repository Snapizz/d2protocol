var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ChangeMapMessage = function() {
  this.mapId = 0;
};

util.inherits(ChangeMapMessage, BaseMessage);

ChangeMapMessage.prototype.serialize = function(output) {
  this.serializeAs_ChangeMapMessage(output);
};

ChangeMapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChangeMapMessage(input);
};

ChangeMapMessage.prototype.serializeAs_ChangeMapMessage = function(param1) {
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
  } else {
    param1.writeInt(this.mapId);
    return;
  }
};

ChangeMapMessage.prototype.deserializeAs_ChangeMapMessage = function(param1) {
  this.mapId = param1.readInt();
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element of ChangeMapMessage.mapId.");
  } else {
    return;
  }
};

ChangeMapMessage.prototype.getMessageId = function() {
  return 221;
};

ChangeMapMessage.prototype.getClassName = function() {
  return 'ChangeMapMessage';
};

module.exports.id = 221;
module.exports.class = ChangeMapMessage;
module.exports.getInstance = function() {
  return new ChangeMapMessage();
};