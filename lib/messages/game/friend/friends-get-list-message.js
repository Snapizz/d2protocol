var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var FriendsGetListMessage = function() {

};

util.inherits(FriendsGetListMessage, BaseMessage);

FriendsGetListMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendsGetListMessage(output);
};

FriendsGetListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendsGetListMessage(input);
};

FriendsGetListMessage.prototype.serializeAs_FriendsGetListMessage = function(param1) {

};

FriendsGetListMessage.prototype.deserializeAs_FriendsGetListMessage = function(param1) {

};

FriendsGetListMessage.prototype.getMessageId = function() {
  return 4001;
};

FriendsGetListMessage.prototype.getClassName = function() {
  return 'FriendsGetListMessage';
};

module.exports.id = 4001;
module.exports.class = FriendsGetListMessage;
module.exports.getInstance = function() {
  return new FriendsGetListMessage();
};