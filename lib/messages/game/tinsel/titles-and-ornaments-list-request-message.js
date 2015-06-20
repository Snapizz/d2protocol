var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

TitlesAndOrnamentsListRequestMessage.prototype.serializeAs_TitlesAndOrnamentsListRequestMessage = function(param1) {

};

TitlesAndOrnamentsListRequestMessage.prototype.deserializeAs_TitlesAndOrnamentsListRequestMessage = function(param1) {

};

TitlesAndOrnamentsListRequestMessage.prototype.getMessageId = function() {
  return 6363;
};

TitlesAndOrnamentsListRequestMessage.prototype.getClassName = function() {
  return 'TitlesAndOrnamentsListRequestMessage';
};

module.exports.id = 6363;
module.exports.class = TitlesAndOrnamentsListRequestMessage;
module.exports.getInstance = function() {
  return new TitlesAndOrnamentsListRequestMessage();
};