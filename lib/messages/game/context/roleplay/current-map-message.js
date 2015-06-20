var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CurrentMapMessage = function() {
  this.mapId = 0;
  this.mapKey = "";
};

util.inherits(CurrentMapMessage, BaseMessage);

CurrentMapMessage.prototype.serialize = function(output) {
  this.serializeAs_CurrentMapMessage(output);
};

CurrentMapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CurrentMapMessage(input);
};

CurrentMapMessage.prototype.serializeAs_CurrentMapMessage = function(param1) {
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
  } else {
    param1.writeInt(this.mapId);
    param1.writeUTF(this.mapKey);
    return;
  }
};

CurrentMapMessage.prototype.deserializeAs_CurrentMapMessage = function(param1) {
  this.mapId = param1.readInt();
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element of CurrentMapMessage.mapId.");
  } else {
    this.mapKey = param1.readUTF();
    return;
  }
};

CurrentMapMessage.prototype.getMessageId = function() {
  return 220;
};

CurrentMapMessage.prototype.getClassName = function() {
  return 'CurrentMapMessage';
};

module.exports.id = 220;
module.exports.class = CurrentMapMessage;