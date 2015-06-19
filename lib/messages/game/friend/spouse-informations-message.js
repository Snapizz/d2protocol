var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SpouseInformationsMessage = function() {
  this.spouse;
};

util.inherits(SpouseInformationsMessage, BaseMessage);

SpouseInformationsMessage.prototype.serialize = function(output) {
  this.serializeAs_SpouseInformationsMessage(output);
};

SpouseInformationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpouseInformationsMessage(input);
};

SpouseInformationsMessage.prototype.serializeAs_SpouseInformationsMessage = function(output) {
  output.writeShort(this.spouse.getTypeId());
  this.spouse.serialize(output);
};

SpouseInformationsMessage.prototype.deserializeAs_SpouseInformationsMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.spouse = ProtocolTypeManager.getInstance(FriendSpouseInformations, _id1);
  this.spouse.deserialize(input);
};

SpouseInformationsMessage.prototype.getMessageId = function() {
  return 6356;
};

SpouseInformationsMessage.prototype.getClassName = function() {
  return 'SpouseInformationsMessage';
};

module.exports.id = 6356;
module.exports.class = SpouseInformationsMessage;