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

InteractiveUseRequestMessage.prototype.serializeAs_InteractiveUseRequestMessage = function(output) {
  if (this.elemId < 0) {
    throw (new Error((("Forbidden value (" + this.elemId) + ") on element elemId.")));
  };
  output.writeVarInt(this.elemId);
  if (this.skillInstanceUid < 0) {
    throw (new Error((("Forbidden value (" + this.skillInstanceUid) + ") on element skillInstanceUid.")));
  };
  output.writeVarInt(this.skillInstanceUid);
};

InteractiveUseRequestMessage.prototype.deserializeAs_InteractiveUseRequestMessage = function(input) {
  this.elemId = input.readVarUhInt();
  if (this.elemId < 0) {
    throw (new Error((("Forbidden value (" + this.elemId) + ") on element of InteractiveUseRequestMessage.elemId.")));
  };
  this.skillInstanceUid = input.readVarUhInt();
  if (this.skillInstanceUid < 0) {
    throw (new Error((("Forbidden value (" + this.skillInstanceUid) + ") on element of InteractiveUseRequestMessage.skillInstanceUid.")));
  };
};

InteractiveUseRequestMessage.prototype.getMessageId = function() {
  return 5001;
};

InteractiveUseRequestMessage.prototype.getClassName = function() {
  return 'InteractiveUseRequestMessage';
};

module.exports.id = 5001;
module.exports.class = InteractiveUseRequestMessage;