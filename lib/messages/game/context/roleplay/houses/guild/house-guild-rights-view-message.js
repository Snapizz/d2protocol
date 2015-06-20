var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var HouseGuildRightsViewMessage = function() {

};

util.inherits(HouseGuildRightsViewMessage, BaseMessage);

HouseGuildRightsViewMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseGuildRightsViewMessage(output);
};

HouseGuildRightsViewMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseGuildRightsViewMessage(input);
};

HouseGuildRightsViewMessage.prototype.serializeAs_HouseGuildRightsViewMessage = function(param1) {

};

HouseGuildRightsViewMessage.prototype.deserializeAs_HouseGuildRightsViewMessage = function(param1) {

};

HouseGuildRightsViewMessage.prototype.getMessageId = function() {
  return 5700;
};

HouseGuildRightsViewMessage.prototype.getClassName = function() {
  return 'HouseGuildRightsViewMessage';
};

module.exports.id = 5700;
module.exports.class = HouseGuildRightsViewMessage;
module.exports.getInstance = function() {
  return new HouseGuildRightsViewMessage();
};