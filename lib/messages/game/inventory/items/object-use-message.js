var d2com = require('d2com'),
  BaseMessage = require('./object-use-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ObjectUseMessage = function() {
  this.objectUID = 0;
};

util.inherits(ObjectUseMessage, BaseMessage);

ObjectUseMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectUseMessage(output);
};

ObjectUseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectUseMessage(input);
};

ObjectUseMessage.prototype.serializeAs_ObjectUseMessage = function(param1) {
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    return;
  }
};

ObjectUseMessage.prototype.deserializeAs_ObjectUseMessage = function(param1) {
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectUseMessage.objectUID.");
  } else {
    return;
  }
};

ObjectUseMessage.prototype.getMessageId = function() {
  return 3019;
};

ObjectUseMessage.prototype.getClassName = function() {
  return 'ObjectUseMessage';
};

module.exports.id = 3019;
module.exports.class = ObjectUseMessage;
module.exports.getInstance = function() {
  return new ObjectUseMessage();
};