var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var FriendAddFailureMessage = function() {
  this.reason = 0;
};

util.inherits(FriendAddFailureMessage, BaseMessage);

FriendAddFailureMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendAddFailureMessage(output);
};

FriendAddFailureMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendAddFailureMessage(input);
};

FriendAddFailureMessage.prototype.serializeAs_FriendAddFailureMessage = function(param1) {
  param1.writeByte(this.reason);
};

FriendAddFailureMessage.prototype.deserializeAs_FriendAddFailureMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of FriendAddFailureMessage.reason.");
  } else {
    return;
  }
};

FriendAddFailureMessage.prototype.getMessageId = function() {
  return 5600;
};

FriendAddFailureMessage.prototype.getClassName = function() {
  return 'FriendAddFailureMessage';
};

module.exports.id = 5600;
module.exports.class = FriendAddFailureMessage;
module.exports.getInstance = function() {
  return new FriendAddFailureMessage();
};