var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceJoinedMessage = function() {
  this.allianceInfo;
  this.enabled = false;
};

util.inherits(AllianceJoinedMessage, BaseMessage);

AllianceJoinedMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceJoinedMessage(output);
};

AllianceJoinedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceJoinedMessage(input);
};

AllianceJoinedMessage.prototype.serializeAs_AllianceJoinedMessage = function(output) {
  this.allianceInfo.serializeAs_AllianceInformations(output);
  output.writeBoolean(this.enabled);
};

AllianceJoinedMessage.prototype.deserializeAs_AllianceJoinedMessage = function(input) {
  this.allianceInfo = new AllianceInformations();
  this.allianceInfo.deserialize(input);
  this.enabled = input.readBoolean();
};

AllianceJoinedMessage.prototype.getMessageId = function() {
  return 6402;
};

AllianceJoinedMessage.prototype.getClassName = function() {
  return 'AllianceJoinedMessage';
};

module.exports.id = 6402;
module.exports.class = AllianceJoinedMessage;