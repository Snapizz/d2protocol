var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TitlesAndOrnamentsListRequestMessage = function() {

};

util.inherits(TitlesAndOrnamentsListRequestMessage, BaseMessage);

TitlesAndOrnamentsListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TitlesAndOrnamentsListRequestMessage(output);
};

TitlesAndOrnamentsListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitlesAndOrnamentsListRequestMessage(input);
};

TitlesAndOrnamentsListRequestMessage.prototype.serializeAs_TitlesAndOrnamentsListRequestMessage = function(output) {

};

TitlesAndOrnamentsListRequestMessage.prototype.deserializeAs_TitlesAndOrnamentsListRequestMessage = function(input) {

};

TitlesAndOrnamentsListRequestMessage.prototype.getMessageId = function() {
  return 6363;
};

TitlesAndOrnamentsListRequestMessage.prototype.getClassName = function() {
  return 'TitlesAndOrnamentsListRequestMessage';
};

module.exports.id = 6363;
module.exports.class = TitlesAndOrnamentsListRequestMessage;