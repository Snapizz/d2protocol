var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SymbioticObjectAssociateRequestMessage = function() {
  this.symbioteUID = 0;
  this.symbiotePos = 0;
  this.hostUID = 0;
  this.hostPos = 0;
};

util.inherits(SymbioticObjectAssociateRequestMessage, BaseMessage);

SymbioticObjectAssociateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_SymbioticObjectAssociateRequestMessage(output);
};

SymbioticObjectAssociateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SymbioticObjectAssociateRequestMessage(input);
};

SymbioticObjectAssociateRequestMessage.prototype.serializeAs_SymbioticObjectAssociateRequestMessage = function(output) {
  if (this.symbioteUID < 0) {
    throw (new Error((("Forbidden value (" + this.symbioteUID) + ") on element symbioteUID.")));
  };
  output.writeVarInt(this.symbioteUID);
  if ((((this.symbiotePos < 0)) || ((this.symbiotePos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.symbiotePos) + ") on element symbiotePos.")));
  };
  output.writeByte(this.symbiotePos);
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element hostUID.")));
  };
  output.writeVarInt(this.hostUID);
  if ((((this.hostPos < 0)) || ((this.hostPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.hostPos) + ") on element hostPos.")));
  };
  output.writeByte(this.hostPos);
};

SymbioticObjectAssociateRequestMessage.prototype.deserializeAs_SymbioticObjectAssociateRequestMessage = function(input) {
  this.symbioteUID = input.readVarUhInt();
  if (this.symbioteUID < 0) {
    throw (new Error((("Forbidden value (" + this.symbioteUID) + ") on element of SymbioticObjectAssociateRequestMessage.symbioteUID.")));
  };
  this.symbiotePos = input.readUnsignedByte();
  if ((((this.symbiotePos < 0)) || ((this.symbiotePos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.symbiotePos) + ") on element of SymbioticObjectAssociateRequestMessage.symbiotePos.")));
  };
  this.hostUID = input.readVarUhInt();
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element of SymbioticObjectAssociateRequestMessage.hostUID.")));
  };
  this.hostPos = input.readUnsignedByte();
  if ((((this.hostPos < 0)) || ((this.hostPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.hostPos) + ") on element of SymbioticObjectAssociateRequestMessage.hostPos.")));
  };
};

SymbioticObjectAssociateRequestMessage.prototype.getMessageId = function() {
  return 6522;
};

SymbioticObjectAssociateRequestMessage.prototype.getClassName = function() {
  return 'SymbioticObjectAssociateRequestMessage';
};

module.exports.id = 6522;
module.exports.class = SymbioticObjectAssociateRequestMessage;