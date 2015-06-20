var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyLocateMembersMessage = function() {
  this.geopositions = [];
};

util.inherits(PartyLocateMembersMessage, BaseMessage);

PartyLocateMembersMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyLocateMembersMessage(output);
};

PartyLocateMembersMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyLocateMembersMessage(input);
};

PartyLocateMembersMessage.prototype.serializeAs_PartyLocateMembersMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeShort(this.geopositions.length);
  var _loc2_ = 0;
  while (_loc2_ < this.geopositions.length) {
    (this.geopositions[_loc2_]).serializeAs_PartyMemberGeoPosition(param1);
    _loc2_++;
  }
};

PartyLocateMembersMessage.prototype.deserializeAs_PartyLocateMembersMessage = function(input) {
  var _loc4_ = null;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new PartyMemberGeoPosition();
    _loc4_.deserialize(param1);
    this.geopositions.push(_loc4_);
    _loc3_++;
  }
};

PartyLocateMembersMessage.prototype.getMessageId = function() {
  return 5595;
};

PartyLocateMembersMessage.prototype.getClassName = function() {
  return 'PartyLocateMembersMessage';
};

module.exports.id = 5595;
module.exports.class = PartyLocateMembersMessage;