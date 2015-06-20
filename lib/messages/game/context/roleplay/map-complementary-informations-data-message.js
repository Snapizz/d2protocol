var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapComplementaryInformationsDataMessage = function() {
  this.subAreaId = 0;
  this.mapId = 0;
  this.houses = [];
  this.actors = [];
  this.interactiveElements = [];
  this.statedElements = [];
  this.obstacles = [];
  this.fights = [];
};

util.inherits(MapComplementaryInformationsDataMessage, BaseMessage);

MapComplementaryInformationsDataMessage.prototype.serialize = function(output) {
  this.serializeAs_MapComplementaryInformationsDataMessage(output);
};

MapComplementaryInformationsDataMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapComplementaryInformationsDataMessage(input);
};

MapComplementaryInformationsDataMessage.prototype.serializeAs_MapComplementaryInformationsDataMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
  output.writeShort(this.houses.length);
  var _i3 = 0;
  while (_i3 < this.houses.length) {
    output.writeShort((this.houses[_i3]).getTypeId());
    (this.houses[_i3]).serialize(output);
    _i3++;
  };
  output.writeShort(this.actors.length);
  var _i4 = 0;
  while (_i4 < this.actors.length) {
    output.writeShort((this.actors[_i4]).getTypeId());
    (this.actors[_i4]).serialize(output);
    _i4++;
  };
  output.writeShort(this.interactiveElements.length);
  var _i5 = 0;
  while (_i5 < this.interactiveElements.length) {
    output.writeShort((this.interactiveElements[_i5]).getTypeId());
    (this.interactiveElements[_i5]).serialize(output);
    _i5++;
  };
  output.writeShort(this.statedElements.length);
  var _i6 = 0;
  while (_i6 < this.statedElements.length) {
    (this.statedElements[_i6]).serializeAs_StatedElement(output);
    _i6++;
  };
  output.writeShort(this.obstacles.length);
  var _i7 = 0;
  while (_i7 < this.obstacles.length) {
    (this.obstacles[_i7]).serializeAs_MapObstacle(output);
    _i7++;
  };
  output.writeShort(this.fights.length);
  var _i8 = 0;
  while (_i8 < this.fights.length) {
    (this.fights[_i8]).serializeAs_FightCommonInformations(output);
    _i8++;
  };
};

MapComplementaryInformationsDataMessage.prototype.deserializeAs_MapComplementaryInformationsDataMessage = function(input) {
  var _id3 = 0;
  var _item3;
  var _id4 = 0;
  var _item4;
  var _id5 = 0;
  var _item5;
  var _item6;
  var _item7;
  var _item8;
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of MapComplementaryInformationsDataMessage.subAreaId.")));
  };
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of MapComplementaryInformationsDataMessage.mapId.")));
  };
  var _housesLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _housesLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(HouseInformations, _id3);
    _item3.deserialize(input);
    this.houses.push(_item3);
    _i3++;
  };
  var _actorsLen = input.readUnsignedShort();
  var _i4 = 0;
  while (_i4 < _actorsLen) {
    _id4 = input.readUnsignedShort();
    _item4 = ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _id4);
    _item4.deserialize(input);
    this.actors.push(_item4);
    _i4++;
  };
  var _interactiveElementsLen = input.readUnsignedShort();
  var _i5 = 0;
  while (_i5 < _interactiveElementsLen) {
    _id5 = input.readUnsignedShort();
    _item5 = ProtocolTypeManager.getInstance(InteractiveElement, _id5);
    _item5.deserialize(input);
    this.interactiveElements.push(_item5);
    _i5++;
  };
  var _statedElementsLen = input.readUnsignedShort();
  var _i6 = 0;
  while (_i6 < _statedElementsLen) {
    _item6 = new StatedElement();
    _item6.deserialize(input);
    this.statedElements.push(_item6);
    _i6++;
  };
  var _obstaclesLen = input.readUnsignedShort();
  var _i7 = 0;
  while (_i7 < _obstaclesLen) {
    _item7 = new MapObstacle();
    _item7.deserialize(input);
    this.obstacles.push(_item7);
    _i7++;
  };
  var _fightsLen = input.readUnsignedShort();
  var _i8 = 0;
  while (_i8 < _fightsLen) {
    _item8 = new FightCommonInformations();
    _item8.deserialize(input);
    this.fights.push(_item8);
    _i8++;
  };
};

MapComplementaryInformationsDataMessage.prototype.getMessageId = function() {
  return 226;
};

MapComplementaryInformationsDataMessage.prototype.getClassName = function() {
  return 'MapComplementaryInformationsDataMessage';
};

module.exports.id = 226;
module.exports.class = MapComplementaryInformationsDataMessage;