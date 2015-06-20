var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var InteractiveUseRequestMessage = function() {
  this.elemId = 0;
  this.skillInstanceUid = 0;
};

util.inherits(InteractiveUseRequestMessage, BaseMessage);

InteractiveUseRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_InteractiveUseRequestMessage(output);
};

InteractiveUseRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveUseRequestMessage(input);
};

InteractiveUseRequestMessage.prototype.serializeAs_InteractiveUseRequestMessage = function(param1) {
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

InteractiveUseRequestMessage.prototype.deserializeAs_InteractiveUseRequestMessage = function(param1) {
  this.elemId = param1.readVarUhInt();
  if (this.elemId < 0) {
    throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseRequestMessage.elemId.");
  } else {
    this.skillInstanceUid = param1.readVarUhInt();
    if (this.skillInstanceUid < 0) {
      throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveUseRequestMessage.skillInstanceUid.");
    } else {
      return;
    }
  }
};

InteractiveUseRequestMessage.prototype.getMessageId = function() {
  return 5001;
};

InteractiveUseRequestMessage.prototype.getClassName = function() {
  return 'InteractiveUseRequestMessage';
};

module.exports.id = 5001;
module.exports.class = InteractiveUseRequestMessage;