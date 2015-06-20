var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var AllianceModificationValidMessage = function() {
  this.allianceName = "";
  this.allianceTag = "";
  this.Alliancemblem = new GuildEmblem();
};

util.inherits(AllianceModificationValidMessage, BaseMessage);

AllianceModificationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceModificationValidMessage(output);
};

AllianceModificationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceModificationValidMessage(input);
};

AllianceModificationValidMessage.prototype.serializeAs_AllianceModificationValidMessage = function(param1) {
  param1.writeUTF(this.allianceName);
  param1.writeUTF(this.allianceTag);
  this.Alliancemblem.serializeAs_GuildEmblem(param1);
};

AllianceModificationValidMessage.prototype.deserializeAs_AllianceModificationValidMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new AllianceModificationValidMessage();
};