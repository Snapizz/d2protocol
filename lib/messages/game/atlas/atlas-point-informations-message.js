var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AtlasPointInformationsMessage = function() {
  this.type;
};

util.inherits(AtlasPointInformationsMessage, BaseMessage);

AtlasPointInformationsMessage.prototype.serialize = function(output) {
  this.serializeAs_AtlasPointInformationsMessage(output);
};

AtlasPointInformationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AtlasPointInformationsMessage(input);
};

AtlasPointInformationsMessage.prototype.serializeAs_AtlasPointInformationsMessage = function(output) {
  this.type.serializeAs_AtlasPointsInformations(output);
};

AtlasPointInformationsMessage.prototype.deserializeAs_AtlasPointInformationsMessage = function(input) {
  this.type = new AtlasPointsInformations();
  this.type.deserialize(input);
};

AtlasPointInformationsMessage.prototype.getMessageId = function() {
  return 5956;
};

AtlasPointInformationsMessage.prototype.getClassName = function() {
  return 'AtlasPointInformationsMessage';
};

module.exports.id = 5956;
module.exports.class = AtlasPointInformationsMessage;