var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportOnSameMapMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(TeleportOnSameMapMessage, BaseMessage);

TeleportOnSameMapMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportOnSameMapMessage(output);
};

TeleportOnSameMapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportOnSameMapMessage(input);
};

TeleportOnSameMapMessage.prototype.serializeAs_TeleportOnSameMapMessage = function(output) {
  output.writeInt(this.targetId);
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
};

TeleportOnSameMapMessage.prototype.deserializeAs_TeleportOnSameMapMessage = function(input) {
  this.targetId = input.readInt();
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of TeleportOnSameMapMessage.cellId.")));
  };
};

TeleportOnSameMapMessage.prototype.getMessageId = function() {
  return 6048;
};

TeleportOnSameMapMessage.prototype.getClassName = function() {
  return 'TeleportOnSameMapMessage';
};

module.exports.id = 6048;
module.exports.class = TeleportOnSameMapMessage;