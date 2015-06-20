var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInAllianceFactsMessage = function() {
  this.allianceInfos;
};

util.inherits(GuildInAllianceFactsMessage, BaseMessage);

GuildInAllianceFactsMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInAllianceFactsMessage(output);
};

GuildInAllianceFactsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInAllianceFactsMessage(input);
};

GuildInAllianceFactsMessage.prototype.serializeAs_GuildInAllianceFactsMessage = function(output) {
  this.serializeAs_GuildFactsMessage(param1);
  this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);
};

GuildInAllianceFactsMessage.prototype.deserializeAs_GuildInAllianceFactsMessage = function(input) {
  this.deserialize(param1);
  this.allianceInfos = new BasicNamedAllianceInformations();
  this.allianceInfos.deserialize(param1);
};

GuildInAllianceFactsMessage.prototype.getMessageId = function() {
  return 6422;
};

GuildInAllianceFactsMessage.prototype.getClassName = function() {
  return 'GuildInAllianceFactsMessage';
};

module.exports.id = 6422;
module.exports.class = GuildInAllianceFactsMessage;