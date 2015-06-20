var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var SymbioticObjectAssociatedMessage = function() {
  this.hostUID = 0;
};

util.inherits(SymbioticObjectAssociatedMessage, BaseMessage);

SymbioticObjectAssociatedMessage.prototype.serialize = function(output) {
  this.serializeAs_SymbioticObjectAssociatedMessage(output);
};

SymbioticObjectAssociatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SymbioticObjectAssociatedMessage(input);
};

SymbioticObjectAssociatedMessage.prototype.serializeAs_SymbioticObjectAssociatedMessage = function(param1) {
  if (this.hostUID < 0) {
    throw new Error("Forbidden value (" + this.hostUID + ") on element hostUID.");
  } else {
    param1.writeVarInt(this.hostUID);
    return;
  }
};

SymbioticObjectAssociatedMessage.prototype.deserializeAs_SymbioticObjectAssociatedMessage = function(param1) {
  this.hostUID = param1.readVarUhInt();
  if (this.hostUID < 0) {
    throw new Error("Forbidden value (" + this.hostUID + ") on element of SymbioticObjectAssociatedMessage.hostUID.");
  } else {
    return;
  }
};

SymbioticObjectAssociatedMessage.prototype.getMessageId = function() {
  return 6527;
};

SymbioticObjectAssociatedMessage.prototype.getClassName = function() {
  return 'SymbioticObjectAssociatedMessage';
};

module.exports.id = 6527;
module.exports.class = SymbioticObjectAssociatedMessage;
module.exports.getInstance = function() {
  return new SymbioticObjectAssociatedMessage();
};