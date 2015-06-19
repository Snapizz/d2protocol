var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var WrapperObjectDissociateRequestMessage = function() {
  this.hostUID = 0;
  this.hostPos = 0;
};

util.inherits(WrapperObjectDissociateRequestMessage, BaseMessage);

WrapperObjectDissociateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_WrapperObjectDissociateRequestMessage(output);
};

WrapperObjectDissociateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_WrapperObjectDissociateRequestMessage(input);
};

WrapperObjectDissociateRequestMessage.prototype.serializeAs_WrapperObjectDissociateRequestMessage = function(output) {
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element hostUID.")));
  };
  output.writeVarInt(this.hostUID);
  if ((((this.hostPos < 0)) || ((this.hostPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.hostPos) + ") on element hostPos.")));
  };
  output.writeByte(this.hostPos);
};

WrapperObjectDissociateRequestMessage.prototype.deserializeAs_WrapperObjectDissociateRequestMessage = function(input) {
  this.hostUID = input.readVarUhInt();
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element of WrapperObjectDissociateRequestMessage.hostUID.")));
  };
  this.hostPos = input.readUnsignedByte();
  if ((((this.hostPos < 0)) || ((this.hostPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.hostPos) + ") on element of WrapperObjectDissociateRequestMessage.hostPos.")));
  };
};

WrapperObjectDissociateRequestMessage.prototype.getMessageId = function() {
  return 6524;
};

WrapperObjectDissociateRequestMessage.prototype.getClassName = function() {
  return 'WrapperObjectDissociateRequestMessage';
};

module.exports.id = 6524;
module.exports.class = WrapperObjectDissociateRequestMessage;