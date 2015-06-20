var d2com = require('d2com'),
  BaseMessage = require('./party-deleted-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyDeletedMessage = function() {

};

util.inherits(PartyDeletedMessage, BaseMessage);

PartyDeletedMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyDeletedMessage(output);
};

PartyDeletedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyDeletedMessage(input);
};

PartyDeletedMessage.prototype.serializeAs_PartyDeletedMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
};

PartyDeletedMessage.prototype.deserializeAs_PartyDeletedMessage = function(param1) {
  this.deserialize(param1);
};

PartyDeletedMessage.prototype.getMessageId = function() {
  return 6261;
};

PartyDeletedMessage.prototype.getClassName = function() {
  return 'PartyDeletedMessage';
};

module.exports.id = 6261;
module.exports.class = PartyDeletedMessage;
module.exports.getInstance = function() {
  return new PartyDeletedMessage();
};