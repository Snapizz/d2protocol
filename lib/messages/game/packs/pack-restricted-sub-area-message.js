var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PackRestrictedSubAreaMessage = function() {
  this.subAreaId = 0;
};

util.inherits(PackRestrictedSubAreaMessage, BaseMessage);

PackRestrictedSubAreaMessage.prototype.serialize = function(output) {
  this.serializeAs_PackRestrictedSubAreaMessage(output);
};

PackRestrictedSubAreaMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PackRestrictedSubAreaMessage(input);
};

PackRestrictedSubAreaMessage.prototype.serializeAs_PackRestrictedSubAreaMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeInt(this.subAreaId);
};

PackRestrictedSubAreaMessage.prototype.deserializeAs_PackRestrictedSubAreaMessage = function(input) {
  this.subAreaId = input.readInt();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PackRestrictedSubAreaMessage.subAreaId.")));
  };
};

PackRestrictedSubAreaMessage.prototype.getMessageId = function() {
  return 6186;
};

PackRestrictedSubAreaMessage.prototype.getClassName = function() {
  return 'PackRestrictedSubAreaMessage';
};

module.exports.id = 6186;
module.exports.class = PackRestrictedSubAreaMessage;