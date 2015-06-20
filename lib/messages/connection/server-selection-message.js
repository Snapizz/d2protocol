var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ServerSelectionMessage = function() {
  this.serverId = 0;
};

util.inherits(ServerSelectionMessage, BaseMessage);

ServerSelectionMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerSelectionMessage(output);
};

ServerSelectionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSelectionMessage(input);
};

ServerSelectionMessage.prototype.serializeAs_ServerSelectionMessage = function(param1) {
  if (this.serverId < 0) {
    throw new Error("Forbidden value (" + this.serverId + ") on element serverId.");
  } else {
    param1.writeVarShort(this.serverId);
    return;
  }
};

ServerSelectionMessage.prototype.deserializeAs_ServerSelectionMessage = function(param1) {
  this.serverId = param1.readVarUhShort();
  if (this.serverId < 0) {
    throw new Error("Forbidden value (" + this.serverId + ") on element of ServerSelectionMessage.serverId.");
  } else {
    return;
  }
};

ServerSelectionMessage.prototype.getMessageId = function() {
  return 40;
};

ServerSelectionMessage.prototype.getClassName = function() {
  return 'ServerSelectionMessage';
};

module.exports.id = 40;
module.exports.class = ServerSelectionMessage;
module.exports.getInstance = function() {
  return new ServerSelectionMessage();
};