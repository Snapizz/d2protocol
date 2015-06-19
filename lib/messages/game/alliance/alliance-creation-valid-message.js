var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceCreationValidMessage = function() {
  this.allianceName = "";
  this.allianceTag = "";
  this.allianceEmblem;
};

util.inherits(AllianceCreationValidMessage, BaseMessage);

AllianceCreationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceCreationValidMessage(output);
};

AllianceCreationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceCreationValidMessage(input);
};

AllianceCreationValidMessage.prototype.serializeAs_AllianceCreationValidMessage = function(output) {
  output.writeUTF(this.allianceName);
  output.writeUTF(this.allianceTag);
  this.allianceEmblem.serializeAs_GuildEmblem(output);
};

AllianceCreationValidMessage.prototype.deserializeAs_AllianceCreationValidMessage = function(input) {
  this.allianceName = input.readUTF();
  this.allianceTag = input.readUTF();
  this.allianceEmblem = new GuildEmblem();
  this.allianceEmblem.deserialize(input);
};

AllianceCreationValidMessage.prototype.getMessageId = function() {
  return 6393;
};

AllianceCreationValidMessage.prototype.getClassName = function() {
  return 'AllianceCreationValidMessage';
};

module.exports.id = 6393;
module.exports.class = AllianceCreationValidMessage;