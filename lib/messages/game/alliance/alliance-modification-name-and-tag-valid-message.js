var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceModificationNameAndTagValidMessage = function() {
  this.allianceName = "";
  this.allianceTag = "";
};

util.inherits(AllianceModificationNameAndTagValidMessage, BaseMessage);

AllianceModificationNameAndTagValidMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceModificationNameAndTagValidMessage(output);
};

AllianceModificationNameAndTagValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceModificationNameAndTagValidMessage(input);
};

AllianceModificationNameAndTagValidMessage.prototype.serializeAs_AllianceModificationNameAndTagValidMessage = function(output) {
  param1.writeUTF(this.allianceName);
  param1.writeUTF(this.allianceTag);
};

AllianceModificationNameAndTagValidMessage.prototype.deserializeAs_AllianceModificationNameAndTagValidMessage = function(input) {
  this.allianceName = param1.readUTF();
  this.allianceTag = param1.readUTF();
};

AllianceModificationNameAndTagValidMessage.prototype.getMessageId = function() {
  return 6449;
};

AllianceModificationNameAndTagValidMessage.prototype.getClassName = function() {
  return 'AllianceModificationNameAndTagValidMessage';
};

module.exports.id = 6449;
module.exports.class = AllianceModificationNameAndTagValidMessage;