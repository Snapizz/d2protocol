var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceModificationValidMessage = function() {
  this.allianceName = "";
  this.allianceTag = "";
  this.Alliancemblem;
};

util.inherits(AllianceModificationValidMessage, BaseMessage);

AllianceModificationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceModificationValidMessage(output);
};

AllianceModificationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceModificationValidMessage(input);
};

AllianceModificationValidMessage.prototype.serializeAs_AllianceModificationValidMessage = function(output) {
  param1.writeUTF(this.allianceName);
  param1.writeUTF(this.allianceTag);
  this.Alliancemblem.serializeAs_GuildEmblem(param1);
};

AllianceModificationValidMessage.prototype.deserializeAs_AllianceModificationValidMessage = function(input) {
  this.allianceName = param1.readUTF();
  this.allianceTag = param1.readUTF();
  this.Alliancemblem = new GuildEmblem();
  this.Alliancemblem.deserialize(param1);
};

AllianceModificationValidMessage.prototype.getMessageId = function() {
  return 6450;
};

AllianceModificationValidMessage.prototype.getClassName = function() {
  return 'AllianceModificationValidMessage';
};

module.exports.id = 6450;
module.exports.class = AllianceModificationValidMessage;