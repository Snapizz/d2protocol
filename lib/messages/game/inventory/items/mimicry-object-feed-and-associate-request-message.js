var d2com = require('d2com'),
  BaseMessage = require('./symbiotic-object-associate-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MimicryObjectFeedAndAssociateRequestMessage = function() {
  this.foodUID = 0;
  this.foodPos = 0;
  this.preview = false;
};

util.inherits(MimicryObjectFeedAndAssociateRequestMessage, BaseMessage);

MimicryObjectFeedAndAssociateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MimicryObjectFeedAndAssociateRequestMessage(output);
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(input);
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.serializeAs_MimicryObjectFeedAndAssociateRequestMessage = function(output) {
  this.serializeAs_SymbioticObjectAssociateRequestMessage(output);
  if (this.foodUID < 0) {
    throw (new Error((("Forbidden value (" + this.foodUID) + ") on element foodUID.")));
  };
  output.writeVarInt(this.foodUID);
  if ((((this.foodPos < 0)) || ((this.foodPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.foodPos) + ") on element foodPos.")));
  };
  output.writeByte(this.foodPos);
  output.writeBoolean(this.preview);
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage = function(input) {
  this.deserialize(input);
  this.foodUID = input.readVarUhInt();
  if (this.foodUID < 0) {
    throw (new Error((("Forbidden value (" + this.foodUID) + ") on element of MimicryObjectFeedAndAssociateRequestMessage.foodUID.")));
  };
  this.foodPos = input.readUnsignedByte();
  if ((((this.foodPos < 0)) || ((this.foodPos > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.foodPos) + ") on element of MimicryObjectFeedAndAssociateRequestMessage.foodPos.")));
  };
  this.preview = input.readBoolean();
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.getMessageId = function() {
  return 6460;
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.getClassName = function() {
  return 'MimicryObjectFeedAndAssociateRequestMessage';
};

module.exports.id = 6460;
module.exports.class = MimicryObjectFeedAndAssociateRequestMessage;