var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

InteractiveUseErrorMessage.prototype.serializeAs_InteractiveUseErrorMessage = function(output) {
  if (this.elemId < 0) {
    throw (new Error((("Forbidden value (" + this.elemId) + ") on element elemId.")));
  };
  output.writeVarInt(this.elemId);
  if (this.skillInstanceUid < 0) {
    throw (new Error((("Forbidden value (" + this.skillInstanceUid) + ") on element skillInstanceUid.")));
  };
  output.writeVarInt(this.skillInstanceUid);
};

InteractiveUseErrorMessage.prototype.deserializeAs_InteractiveUseErrorMessage = function(input) {
  this.elemId = input.readVarUhInt();
  if (this.elemId < 0) {
    throw (new Error((("Forbidden value (" + this.elemId) + ") on element of InteractiveUseErrorMessage.elemId.")));
  };
  this.skillInstanceUid = input.readVarUhInt();
  if (this.skillInstanceUid < 0) {
    throw (new Error((("Forbidden value (" + this.skillInstanceUid) + ") on element of InteractiveUseErrorMessage.skillInstanceUid.")));
  };
};

InteractiveUseErrorMessage.prototype.getMessageId = function() {
  return 6384;
};

InteractiveUseErrorMessage.prototype.getClassName = function() {
  return 'InteractiveUseErrorMessage';
};

module.exports.id = 6384;
module.exports.class = InteractiveUseErrorMessage;