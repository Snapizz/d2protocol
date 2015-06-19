var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MimicryObjectEraseRequestMessage = function() {
  this.hostUID = 0;
  this.hostPos = 0;
};

util.inherits(MimicryObjectEraseRequestMessage, BaseMessage);

MimicryObjectEraseRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MimicryObjectEraseRequestMessage(output);
};

MimicryObjectEraseRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MimicryObjectEraseRequestMessage(input);
};

MimicryObjectEraseRequestMessage.prototype.serializeAs_MimicryObjectEraseRequestMessage = function(output) {
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element hostUID.")));
  };
  output.writeVarInt(this.hostUID);
  if ((((this.hostPos < 0)) || ((this.hostPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.hostPos) + ") on element hostPos.")));
  };
  output.writeByte(this.hostPos);
};

MimicryObjectEraseRequestMessage.prototype.deserializeAs_MimicryObjectEraseRequestMessage = function(input) {
  this.hostUID = input.readVarUhInt();
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element of MimicryObjectEraseRequestMessage.hostUID.")));
  };
  this.hostPos = input.readUnsignedByte();
  if ((((this.hostPos < 0)) || ((this.hostPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.hostPos) + ") on element of MimicryObjectEraseRequestMessage.hostPos.")));
  };
};

MimicryObjectEraseRequestMessage.prototype.getMessageId = function() {
  return 6457;
};

MimicryObjectEraseRequestMessage.prototype.getClassName = function() {
  return 'MimicryObjectEraseRequestMessage';
};

module.exports.id = 6457;
module.exports.class = MimicryObjectEraseRequestMessage;