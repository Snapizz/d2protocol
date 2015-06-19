var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IgnoredDeleteRequestMessage = function() {
  this.accountId = 0;
  this.session = false;
};

util.inherits(IgnoredDeleteRequestMessage, BaseMessage);

IgnoredDeleteRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredDeleteRequestMessage(output);
};

IgnoredDeleteRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredDeleteRequestMessage(input);
};

IgnoredDeleteRequestMessage.prototype.serializeAs_IgnoredDeleteRequestMessage = function(output) {
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  output.writeBoolean(this.session);
};

IgnoredDeleteRequestMessage.prototype.deserializeAs_IgnoredDeleteRequestMessage = function(input) {
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of IgnoredDeleteRequestMessage.accountId.")));
  };
  this.session = input.readBoolean();
};

IgnoredDeleteRequestMessage.prototype.getMessageId = function() {
  return 5680;
};

IgnoredDeleteRequestMessage.prototype.getClassName = function() {
  return 'IgnoredDeleteRequestMessage';
};

module.exports.id = 5680;
module.exports.class = IgnoredDeleteRequestMessage;