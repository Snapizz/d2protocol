var d2com = require('d2com'),
  BaseMessage = require('./party-new-member-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyNewMemberMessage = function() {

};

util.inherits(PartyNewMemberMessage, BaseMessage);

PartyNewMemberMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyNewMemberMessage(output);
};

PartyNewMemberMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyNewMemberMessage(input);
};

PartyNewMemberMessage.prototype.serializeAs_PartyNewMemberMessage = function(param1) {
  this.serializeAs_PartyUpdateMessage(param1);
};

PartyNewMemberMessage.prototype.deserializeAs_PartyNewMemberMessage = function(param1) {
  this.deserialize(param1);
};

PartyNewMemberMessage.prototype.getMessageId = function() {
  return 6306;
};

PartyNewMemberMessage.prototype.getClassName = function() {
  return 'PartyNewMemberMessage';
};

module.exports.id = 6306;
module.exports.class = PartyNewMemberMessage;
module.exports.getInstance = function() {
  return new PartyNewMemberMessage();
};