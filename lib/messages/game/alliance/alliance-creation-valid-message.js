var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var AllianceCreationValidMessage = function() {
  this.allianceName = "";
  this.allianceTag = "";
  this.allianceEmblem = new GuildEmblem();
};

util.inherits(AllianceCreationValidMessage, BaseMessage);

AllianceCreationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceCreationValidMessage(output);
};

AllianceCreationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceCreationValidMessage(input);
};

AllianceCreationValidMessage.prototype.serializeAs_AllianceCreationValidMessage = function(param1) {
  param1.writeUTF(this.allianceName);
  param1.writeUTF(this.allianceTag);
  this.allianceEmblem.serializeAs_GuildEmblem(param1);
};

AllianceCreationValidMessage.prototype.deserializeAs_AllianceCreationValidMessage = function(param1) {
  this.allianceName = param1.readUTF();
  this.allianceTag = param1.readUTF();
  this.allianceEmblem = new GuildEmblem();
  this.allianceEmblem.deserialize(param1);
};

AllianceCreationValidMessage.prototype.getMessageId = function() {
  return 6393;
};

AllianceCreationValidMessage.prototype.getClassName = function() {
  return 'AllianceCreationValidMessage';
};

module.exports.id = 6393;
module.exports.class = AllianceCreationValidMessage;
module.exports.getInstance = function() {
  return new AllianceCreationValidMessage();
};