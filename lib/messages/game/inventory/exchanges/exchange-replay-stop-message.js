var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeReplayStopMessage = function() {

};

util.inherits(ExchangeReplayStopMessage, BaseMessage);

ExchangeReplayStopMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeReplayStopMessage(output);
};

ExchangeReplayStopMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeReplayStopMessage(input);
};

ExchangeReplayStopMessage.prototype.serializeAs_ExchangeReplayStopMessage = function(output) {

};

ExchangeReplayStopMessage.prototype.deserializeAs_ExchangeReplayStopMessage = function(input) {

};

ExchangeReplayStopMessage.prototype.getMessageId = function() {
  return 6001;
};

ExchangeReplayStopMessage.prototype.getClassName = function() {
  return 'ExchangeReplayStopMessage';
};

module.exports.id = 6001;
module.exports.class = ExchangeReplayStopMessage;