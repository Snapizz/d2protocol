var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InteractiveUsedMessage = function() {
  this.entityId = 0;
  this.elemId = 0;
  this.skillId = 0;
  this.duration = 0;
};

util.inherits(InteractiveUsedMessage, BaseMessage);

InteractiveUsedMessage.prototype.serialize = function(output) {
  this.serializeAs_InteractiveUsedMessage(output);
};

InteractiveUsedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveUsedMessage(input);
};

InteractiveUsedMessage.prototype.serializeAs_InteractiveUsedMessage = function(output) {
  if (this.entityId < 0) {
    throw (new Error((("Forbidden value (" + this.entityId) + ") on element entityId.")));
  };
  output.writeVarInt(this.entityId);
  if (this.elemId < 0) {
    throw (new Error((("Forbidden value (" + this.elemId) + ") on element elemId.")));
  };
  output.writeVarInt(this.elemId);
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element skillId.")));
  };
  output.writeVarShort(this.skillId);
  if (this.duration < 0) {
    throw (new Error((("Forbidden value (" + this.duration) + ") on element duration.")));
  };
  output.writeVarShort(this.duration);
};

InteractiveUsedMessage.prototype.deserializeAs_InteractiveUsedMessage = function(input) {
  this.entityId = input.readVarUhInt();
  if (this.entityId < 0) {
    throw (new Error((("Forbidden value (" + this.entityId) + ") on element of InteractiveUsedMessage.entityId.")));
  };
  this.elemId = input.readVarUhInt();
  if (this.elemId < 0) {
    throw (new Error((("Forbidden value (" + this.elemId) + ") on element of InteractiveUsedMessage.elemId.")));
  };
  this.skillId = input.readVarUhShort();
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element of InteractiveUsedMessage.skillId.")));
  };
  this.duration = input.readVarUhShort();
  if (this.duration < 0) {
    throw (new Error((("Forbidden value (" + this.duration) + ") on element of InteractiveUsedMessage.duration.")));
  };
};

InteractiveUsedMessage.prototype.getMessageId = function() {
  return 5745;
};

InteractiveUsedMessage.prototype.getClassName = function() {
  return 'InteractiveUsedMessage';
};

module.exports.id = 5745;
module.exports.class = InteractiveUsedMessage;