var d2com = require('d2com'),
  BaseMessage = require('./symbiotic-object-associate-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

SymbioticObjectAssociateRequestMessage.prototype.serializeAs_SymbioticObjectAssociateRequestMessage = function(param1) {
  if (this.symbioteUID < 0) {
    throw new Error("Forbidden value (" + this.symbioteUID + ") on element symbioteUID.");
  } else {
    param1.writeVarInt(this.symbioteUID);
    if (this.symbiotePos < 0 || this.symbiotePos > 255) {
      throw new Error("Forbidden value (" + this.symbiotePos + ") on element symbiotePos.");
    } else {
      param1.writeByte(this.symbiotePos);
      if (this.hostUID < 0) {
        throw new Error("Forbidden value (" + this.hostUID + ") on element hostUID.");
      } else {
        param1.writeVarInt(this.hostUID);
        if (this.hostPos < 0 || this.hostPos > 255) {
          throw new Error("Forbidden value (" + this.hostPos + ") on element hostPos.");
        } else {
          param1.writeByte(this.hostPos);
          return;
        }
      }
    }
  }
};

SymbioticObjectAssociateRequestMessage.prototype.deserializeAs_SymbioticObjectAssociateRequestMessage = function(param1) {
  this.symbioteUID = param1.readVarUhInt();
  if (this.symbioteUID < 0) {
    throw new Error("Forbidden value (" + this.symbioteUID + ") on element of SymbioticObjectAssociateRequestMessage.symbioteUID.");
  } else {
    this.symbiotePos = param1.readUnsignedByte();
    if (this.symbiotePos < 0 || this.symbiotePos > 255) {
      throw new Error("Forbidden value (" + this.symbiotePos + ") on element of SymbioticObjectAssociateRequestMessage.symbiotePos.");
    } else {
      this.hostUID = param1.readVarUhInt();
      if (this.hostUID < 0) {
        throw new Error("Forbidden value (" + this.hostUID + ") on element of SymbioticObjectAssociateRequestMessage.hostUID.");
      } else {
        this.hostPos = param1.readUnsignedByte();
        if (this.hostPos < 0 || this.hostPos > 255) {
          throw new Error("Forbidden value (" + this.hostPos + ") on element of SymbioticObjectAssociateRequestMessage.hostPos.");
        } else {
          return;
        }
      }
    }
  }
};

SymbioticObjectAssociateRequestMessage.prototype.getMessageId = function() {
  return 6522;
};

SymbioticObjectAssociateRequestMessage.prototype.getClassName = function() {
  return 'SymbioticObjectAssociateRequestMessage';
};

module.exports.id = 6522;
module.exports.class = SymbioticObjectAssociateRequestMessage;
module.exports.getInstance = function() {
  return new SymbioticObjectAssociateRequestMessage();
};