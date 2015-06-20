var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AtlasPointsInformations = require('../../../types/game/context/roleplay/atlas-points-informations.js');

var AtlasPointInformationsMessage = function() {
  this.type = new AtlasPointsInformations();
};

util.inherits(AtlasPointInformationsMessage, BaseMessage);

AtlasPointInformationsMessage.prototype.serialize = function(output) {
  this.serializeAs_AtlasPointInformationsMessage(output);
};

AtlasPointInformationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AtlasPointInformationsMessage(input);
};

AtlasPointInformationsMessage.prototype.serializeAs_AtlasPointInformationsMessage = function(param1) {
  this.type.serializeAs_AtlasPointsInformations(param1);
};

AtlasPointInformationsMessage.prototype.deserializeAs_AtlasPointInformationsMessage = function(param1) {
  this.type = new AtlasPointsInformations();
  this.type.deserialize(param1);
};

AtlasPointInformationsMessage.prototype.getMessageId = function() {
  return 5956;
};

AtlasPointInformationsMessage.prototype.getClassName = function() {
  return 'AtlasPointInformationsMessage';
};

module.exports.id = 5956;
module.exports.class = AtlasPointInformationsMessage;
module.exports.getInstance = function() {
  return new AtlasPointInformationsMessage();
};