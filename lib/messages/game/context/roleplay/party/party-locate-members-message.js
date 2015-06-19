var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
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
  this.serializeAs_AbstractPartyMessage(output);
  output.writeShort(this.geopositions.length);
  var _i1;
  while (_i1 < this.geopositions.length) {
    (this.geopositions[_i1]).serializeAs_PartyMemberGeoPosition(output);
    _i1++;
  };
};

PartyLocateMembersMessage.prototype.deserializeAs_PartyLocateMembersMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _geopositionsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _geopositionsLen) {
    _item1 = new PartyMemberGeoPosition();
    _item1.deserialize(input);
    this.geopositions.push(_item1);
    _i1++;
  };
};

PartyLocateMembersMessage.prototype.getMessageId = function() {
  return 5595;
};

PartyLocateMembersMessage.prototype.getClassName = function() {
  return 'PartyLocateMembersMessage';
};

module.exports.id = 5595;
module.exports.class = PartyLocateMembersMessage;