var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

MapComplementaryInformationsDataMessage.prototype.serializeAs_MapComplementaryInformationsDataMessage = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    if (this.mapId < 0) {
      throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
      param1.writeInt(this.mapId);
      param1.writeShort(this.houses.length);
      var _loc2_ = 0;
      while (_loc2_ < this.houses.length) {
        param1.writeShort((this.houses[_loc2_]).getTypeId());
        (this.houses[_loc2_]).serialize(param1);
        _loc2_++;
      }
      param1.writeShort(this.actors.length);
      var _loc3_ = 0;
      while (_loc3_ < this.actors.length) {
        param1.writeShort((this.actors[_loc3_]).getTypeId());
        (this.actors[_loc3_]).serialize(param1);
        _loc3_++;
      }
      param1.writeShort(this.interactiveElements.length);
      var _loc4_ = 0;
      while (_loc4_ < this.interactiveElements.length) {
        param1.writeShort((this.interactiveElements[_loc4_]).getTypeId());
        (this.interactiveElements[_loc4_]).serialize(param1);
        _loc4_++;
      }
      param1.writeShort(this.statedElements.length);
      var _loc5_ = 0;
      while (_loc5_ < this.statedElements.length) {
        (this.statedElements[_loc5_]).serializeAs_StatedElement(param1);
        _loc5_++;
      }
      param1.writeShort(this.obstacles.length);
      var _loc6_ = 0;
      while (_loc6_ < this.obstacles.length) {
        (this.obstacles[_loc6_]).serializeAs_MapObstacle(param1);
        _loc6_++;
      }
      param1.writeShort(this.fights.length);
      var _loc7_ = 0;
      while (_loc7_ < this.fights.length) {
        (this.fights[_loc7_]).serializeAs_FightCommonInformations(param1);
        _loc7_++;
      }
      return;
    }
  }
};

MapComplementaryInformationsDataMessage.prototype.deserializeAs_MapComplementaryInformationsDataMessage = function(param1) {
  var _loc14_ = 0;
  var _loc15_ = null;
  var _loc16_ = 0;
  var _loc17_ = null;
  var _loc18_ = 0;
  var _loc19_ = null;
  var _loc20_ = null;
  var _loc21_ = null;
  var _loc22_ = null;
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of MapComplementaryInformationsDataMessage.subAreaId.");
  } else {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
      throw new Error("Forbidden value (" + this.mapId + ") on element of MapComplementaryInformationsDataMessage.mapId.");
    } else {
      var _loc2_ = param1.readUnsignedShort();
      var _loc3_ = 0;
      while (_loc3_ < _loc2_) {
        _loc14_ = param1.readUnsignedShort();
        _loc15_ = ProtocolTypeManager.getInstance(HouseInformations, _loc14_);
        _loc15_.deserialize(param1);
        this.houses.push(_loc15_);
        _loc3_++;
      }
      var _loc4_ = param1.readUnsignedShort();
      var _loc5_ = 0;
      while (_loc5_ < _loc4_) {
        _loc16_ = param1.readUnsignedShort();
        _loc17_ = ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _loc16_);
        _loc17_.deserialize(param1);
        this.actors.push(_loc17_);
        _loc5_++;
      }
      var _loc6_ = param1.readUnsignedShort();
      var _loc7_ = 0;
      while (_loc7_ < _loc6_) {
        _loc18_ = param1.readUnsignedShort();
        _loc19_ = ProtocolTypeManager.getInstance(InteractiveElement, _loc18_);
        _loc19_.deserialize(param1);
        this.interactiveElements.push(_loc19_);
        _loc7_++;
      }
      var _loc8_ = param1.readUnsignedShort();
      var _loc9_ = 0;
      while (_loc9_ < _loc8_) {
        _loc20_ = new StatedElement();
        _loc20_.deserialize(param1);
        this.statedElements.push(_loc20_);
        _loc9_++;
      }
      var _loc10_ = param1.readUnsignedShort();
      var _loc11_ = 0;
      while (_loc11_ < _loc10_) {
        _loc21_ = new MapObstacle();
        _loc21_.deserialize(param1);
        this.obstacles.push(_loc21_);
        _loc11_++;
      }
      var _loc12_ = param1.readUnsignedShort();
      var _loc13_ = 0;
      while (_loc13_ < _loc12_) {
        _loc22_ = new FightCommonInformations();
        _loc22_.deserialize(param1);
        this.fights.push(_loc22_);
        _loc13_++;
      }
      return;
    }
  }
};

MapComplementaryInformationsDataMessage.prototype.getMessageId = function() {
  return 226;
};

MapComplementaryInformationsDataMessage.prototype.getClassName = function() {
  return 'MapComplementaryInformationsDataMessage';
};

module.exports.id = 226;
module.exports.class = MapComplementaryInformationsDataMessage;
module.exports.getInstance = function() {
  return new MapComplementaryInformationsDataMessage();
};