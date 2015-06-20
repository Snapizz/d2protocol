var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectFoundWhileRecoltingMessage = function() {
  this.genericId = 0;
  this.quantity = 0;
  this.resourceGenericId = 0;
};

util.inherits(ObjectFoundWhileRecoltingMessage, BaseMessage);

ObjectFoundWhileRecoltingMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectFoundWhileRecoltingMessage(output);
};

ObjectFoundWhileRecoltingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectFoundWhileRecoltingMessage(input);
};

ObjectFoundWhileRecoltingMessage.prototype.serializeAs_ObjectFoundWhileRecoltingMessage = function(output) {
  if (this.genericId < 0) {
    throw new Error("Forbidden value (" + this.genericId + ") on element genericId.");
  } else {
    param1.writeVarShort(this.genericId);
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
      param1.writeVarInt(this.quantity);
      if (this.resourceGenericId < 0) {
        throw new Error("Forbidden value (" + this.resourceGenericId + ") on element resourceGenericId.");
      } else {
        param1.writeVarInt(this.resourceGenericId);
        return;
      }
    }
  }
};

ObjectFoundWhileRecoltingMessage.prototype.deserializeAs_ObjectFoundWhileRecoltingMessage = function(input) {
  this.genericId = param1.readVarUhShort();
  if (this.genericId < 0) {
    throw new Error("Forbidden value (" + this.genericId + ") on element of ObjectFoundWhileRecoltingMessage.genericId.");
  } else {
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectFoundWhileRecoltingMessage.quantity.");
    } else {
      this.resourceGenericId = param1.readVarUhInt();
      if (this.resourceGenericId < 0) {
        throw new Error("Forbidden value (" + this.resourceGenericId + ") on element of ObjectFoundWhileRecoltingMessage.resourceGenericId.");
      } else {
        return;
      }
    }
  }
};

ObjectFoundWhileRecoltingMessage.prototype.getMessageId = function() {
  return 6017;
};

ObjectFoundWhileRecoltingMessage.prototype.getClassName = function() {
  return 'ObjectFoundWhileRecoltingMessage';
};

module.exports.id = 6017;
module.exports.class = ObjectFoundWhileRecoltingMessage;