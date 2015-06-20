var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var InteractiveUseErrorMessage = function() {
  this.elemId = 0;
  this.skillInstanceUid = 0;
};

util.inherits(InteractiveUseErrorMessage, BaseMessage);

InteractiveUseErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_InteractiveUseErrorMessage(output);
};

InteractiveUseErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveUseErrorMessage(input);
};

InteractiveUseErrorMessage.prototype.serializeAs_InteractiveUseErrorMessage = function(param1) {
  if (this.elemId < 0) {
    throw new Error("Forbidden value (" + this.elemId + ") on element elemId.");
  } else {
    param1.writeVarInt(this.elemId);
    if (this.skillInstanceUid < 0) {
      throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element skillInstanceUid.");
    } else {
      param1.writeVarInt(this.skillInstanceUid);
      return;
    }
  }
};

InteractiveUseErrorMessage.prototype.deserializeAs_InteractiveUseErrorMessage = function(param1) {
  this.elemId = param1.readVarUhInt();
  if (this.elemId < 0) {
    throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseErrorMessage.elemId.");
  } else {
    this.skillInstanceUid = param1.readVarUhInt();
    if (this.skillInstanceUid < 0) {
      throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveUseErrorMessage.skillInstanceUid.");
    } else {
      return;
    }
  }
};

InteractiveUseErrorMessage.prototype.getMessageId = function() {
  return 6384;
};

InteractiveUseErrorMessage.prototype.getClassName = function() {
  return 'InteractiveUseErrorMessage';
};

module.exports.id = 6384;
module.exports.class = InteractiveUseErrorMessage;
module.exports.getInstance = function() {
  return new InteractiveUseErrorMessage();
};