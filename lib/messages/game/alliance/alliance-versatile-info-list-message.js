var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var AllianceVersatileInfoListMessage = function() {
  this.alliances = [];
};

util.inherits(AllianceVersatileInfoListMessage, BaseMessage);

AllianceVersatileInfoListMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceVersatileInfoListMessage(output);
};

AllianceVersatileInfoListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceVersatileInfoListMessage(input);
};

AllianceVersatileInfoListMessage.prototype.serializeAs_AllianceVersatileInfoListMessage = function(param1) {
  param1.writeShort(this.alliances.length);
  var _loc2_ = 0;
  while (_loc2_ < this.alliances.length) {
    (this.alliances[_loc2_]).serializeAs_AllianceVersatileInformations(param1);
    _loc2_++;
  }
};

AllianceVersatileInfoListMessage.prototype.deserializeAs_AllianceVersatileInfoListMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new AllianceVersatileInformations();
    _loc4_.deserialize(param1);
    this.alliances.push(_loc4_);
    _loc3_++;
  }
};

AllianceVersatileInfoListMessage.prototype.getMessageId = function() {
  return 6436;
};

AllianceVersatileInfoListMessage.prototype.getClassName = function() {
  return 'AllianceVersatileInfoListMessage';
};

module.exports.id = 6436;
module.exports.class = AllianceVersatileInfoListMessage;
module.exports.getInstance = function() {
  return new AllianceVersatileInfoListMessage();
};