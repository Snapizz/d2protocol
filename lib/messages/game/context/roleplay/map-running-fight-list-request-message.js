var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var MapRunningFightListRequestMessage = function() {

};

util.inherits(MapRunningFightListRequestMessage, BaseMessage);

MapRunningFightListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MapRunningFightListRequestMessage(output);
};

MapRunningFightListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapRunningFightListRequestMessage(input);
};

MapRunningFightListRequestMessage.prototype.serializeAs_MapRunningFightListRequestMessage = function(param1) {

};

MapRunningFightListRequestMessage.prototype.deserializeAs_MapRunningFightListRequestMessage = function(param1) {

};

MapRunningFightListRequestMessage.prototype.getMessageId = function() {
  return 5742;
};

MapRunningFightListRequestMessage.prototype.getClassName = function() {
  return 'MapRunningFightListRequestMessage';
};

module.exports.id = 5742;
module.exports.class = MapRunningFightListRequestMessage;
module.exports.getInstance = function() {
  return new MapRunningFightListRequestMessage();
};