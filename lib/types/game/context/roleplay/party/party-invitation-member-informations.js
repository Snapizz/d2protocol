var BaseMessage = require('../../../character/choice/character-base-informations.js').class,
  util = require('util');

var PartyInvitationMemberInformations = function() {
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.companions = [];
};

util.inherits(PartyInvitationMemberInformations, BaseMessage);

PartyInvitationMemberInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationMemberInformations(output);
};

PartyInvitationMemberInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationMemberInformations(input);
};

PartyInvitationMemberInformations.prototype.serializeAs_PartyInvitationMemberInformations = function(output) {
  this.serializeAs_CharacterBaseInformations(output);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeShort(this.companions.length);
  var _i5 = 0;
  while (_i5 < this.companions.length) {
    (this.companions[_i5]).serializeAs_PartyCompanionBaseInformations(output);
    _i5++;
  };
};

PartyInvitationMemberInformations.prototype.deserializeAs_PartyInvitationMemberInformations = function(input) {
  var _item5;
  this.deserialize(input);
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of PartyInvitationMemberInformations.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of PartyInvitationMemberInformations.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PartyInvitationMemberInformations.subAreaId.")));
  };
  var _companionsLen = input.readUnsignedShort();
  var _i5 = 0;
  while (_i5 < _companionsLen) {
    _item5 = new PartyCompanionBaseInformations();
    _item5.deserialize(input);
    this.companions.push(_item5);
    _i5++;
  };
};

PartyInvitationMemberInformations.prototype.getTypeId = function() {
  return 376;
};

PartyInvitationMemberInformations.prototype.getClassName = function() {
  return 'PartyInvitationMemberInformations';
};

module.exports.id = 376;
module.exports.class = PartyInvitationMemberInformations;