var BaseMessage = require('../../../character/choice/character-base-informations.js').class,
  util = require('util');

var PartyMemberInformations = function() {
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.prospecting = 0;
  this.regenRate = 0;
  this.initiative = 0;
  this.alignmentSide = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.status;
  this.companions = [];
};

util.inherits(PartyMemberInformations, BaseMessage);

PartyMemberInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberInformations(output);
};

PartyMemberInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberInformations(input);
};

PartyMemberInformations.prototype.serializeAs_PartyMemberInformations = function(output) {
  this.serializeAs_CharacterBaseInformations(output);
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element lifePoints.")));
  };
  output.writeVarInt(this.lifePoints);
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element maxLifePoints.")));
  };
  output.writeVarInt(this.maxLifePoints);
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element prospecting.")));
  };
  output.writeVarShort(this.prospecting);
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element regenRate.")));
  };
  output.writeByte(this.regenRate);
  if (this.initiative < 0) {
    throw (new Error((("Forbidden value (" + this.initiative) + ") on element initiative.")));
  };
  output.writeVarShort(this.initiative);
  output.writeByte(this.alignmentSide);
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
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
  output.writeShort(this.companions.length);
  var _i12 = 0;
  while (_i12 < this.companions.length) {
    (this.companions[_i12]).serializeAs_PartyCompanionMemberInformations(output);
    _i12++;
  };
};

PartyMemberInformations.prototype.deserializeAs_PartyMemberInformations = function(input) {
  var _item12;
  this.deserialize(input);
  this.lifePoints = input.readVarUhInt();
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element of PartyMemberInformations.lifePoints.")));
  };
  this.maxLifePoints = input.readVarUhInt();
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element of PartyMemberInformations.maxLifePoints.")));
  };
  this.prospecting = input.readVarUhShort();
  if (this.prospecting < 0) {
    throw (new Error((("Forbidden value (" + this.prospecting) + ") on element of PartyMemberInformations.prospecting.")));
  };
  this.regenRate = input.readUnsignedByte();
  if ((((this.regenRate < 0)) || ((this.regenRate > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.regenRate) + ") on element of PartyMemberInformations.regenRate.")));
  };
  this.initiative = input.readVarUhShort();
  if (this.initiative < 0) {
    throw (new Error((("Forbidden value (" + this.initiative) + ") on element of PartyMemberInformations.initiative.")));
  };
  this.alignmentSide = input.readByte();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of PartyMemberInformations.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of PartyMemberInformations.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PartyMemberInformations.subAreaId.")));
  };
  var _id11 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id11);
  this.status.deserialize(input);
  var _companionsLen = input.readUnsignedShort();
  var _i12 = 0;
  while (_i12 < _companionsLen) {
    _item12 = new PartyCompanionMemberInformations();
    _item12.deserialize(input);
    this.companions.push(_item12);
    _i12++;
  };
};

PartyMemberInformations.prototype.getTypeId = function() {
  return 90;
};

PartyMemberInformations.prototype.getClassName = function() {
  return 'PartyMemberInformations';
};

module.exports.id = 90;
module.exports.class = PartyMemberInformations;