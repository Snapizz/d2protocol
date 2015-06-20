var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceMembershipMessage = function() {

};

util.inherits(AllianceMembershipMessage, BaseMessage);

AllianceMembershipMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceMembershipMessage(output);
};

AllianceMembershipMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceMembershipMessage(input);
};

AllianceMembershipMessage.prototype.serializeAs_AllianceMembershipMessage = function(output) {
  super.serializeAs_AllianceJoinedMessage(param1);
};

AllianceMembershipMessage.prototype.deserializeAs_AllianceMembershipMessage = function(input) {
  super.deserialize(param1);
};

AllianceMembershipMessage.prototype.getMessageId = function() {
  return 6390;
};

AllianceMembershipMessage.prototype.getClassName = function() {
  return 'AllianceMembershipMessage';
};

module.exports.id = 6390;
module.exports.class = AllianceMembershipMessage;