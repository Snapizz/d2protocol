var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

SymbioticObjectAssociatedMessage.prototype.serializeAs_SymbioticObjectAssociatedMessage = function(output) {
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element hostUID.")));
  };
  output.writeVarInt(this.hostUID);
};

SymbioticObjectAssociatedMessage.prototype.deserializeAs_SymbioticObjectAssociatedMessage = function(input) {
  this.hostUID = input.readVarUhInt();
  if (this.hostUID < 0) {
    throw (new Error((("Forbidden value (" + this.hostUID) + ") on element of SymbioticObjectAssociatedMessage.hostUID.")));
  };
};

SymbioticObjectAssociatedMessage.prototype.getMessageId = function() {
  return 6527;
};

SymbioticObjectAssociatedMessage.prototype.getClassName = function() {
  return 'SymbioticObjectAssociatedMessage';
};

module.exports.id = 6527;
module.exports.class = SymbioticObjectAssociatedMessage;