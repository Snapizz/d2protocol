var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var FriendSpouseInformations = require('../../../types/game/friend/friend-spouse-informations.js').class;

var SpouseInformationsMessage = function() {
  this.spouse = new FriendSpouseInformations();
};

util.inherits(SpouseInformationsMessage, BaseMessage);

SpouseInformationsMessage.prototype.serialize = function(output) {
  this.serializeAs_SpouseInformationsMessage(output);
};

SpouseInformationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpouseInformationsMessage(input);
};

SpouseInformationsMessage.prototype.serializeAs_SpouseInformationsMessage = function(param1) {
  param1.writeShort(this.spouse.getTypeId());
  this.spouse.serialize(param1);
};

SpouseInformationsMessage.prototype.deserializeAs_SpouseInformationsMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.spouse = ProtocolTypeManager.getInstance(FriendSpouseInformations, _loc2_);
  this.spouse.deserialize(param1);
};

SpouseInformationsMessage.prototype.getMessageId = function() {
  return 6356;
};

SpouseInformationsMessage.prototype.getClassName = function() {
  return 'SpouseInformationsMessage';
};

module.exports.id = 6356;
module.exports.class = SpouseInformationsMessage;
module.exports.getInstance = function() {
  return new SpouseInformationsMessage();
};