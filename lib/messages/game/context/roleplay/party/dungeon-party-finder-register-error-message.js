var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var DungeonPartyFinderRegisterErrorMessage = function() {

};

util.inherits(DungeonPartyFinderRegisterErrorMessage, BaseMessage);

DungeonPartyFinderRegisterErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderRegisterErrorMessage(output);
};

DungeonPartyFinderRegisterErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderRegisterErrorMessage(input);
};

DungeonPartyFinderRegisterErrorMessage.prototype.serializeAs_DungeonPartyFinderRegisterErrorMessage = function(param1) {

};

DungeonPartyFinderRegisterErrorMessage.prototype.deserializeAs_DungeonPartyFinderRegisterErrorMessage = function(param1) {

};

DungeonPartyFinderRegisterErrorMessage.prototype.getMessageId = function() {
  return 6243;
};

DungeonPartyFinderRegisterErrorMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderRegisterErrorMessage';
};

module.exports.id = 6243;
module.exports.class = DungeonPartyFinderRegisterErrorMessage;