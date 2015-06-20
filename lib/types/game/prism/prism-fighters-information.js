var BaseMessage = require('./prism-fighters-information.js').class,
  util = require('util');

var PrismFightersInformation = function() {
  this.subAreaId = 0;
  this.waitingForHelpInfo;
  this.allyCharactersInformations = [];
  this.enemyCharactersInformations = [];
};

util.inherits(PrismFightersInformation, BaseMessage);

PrismFightersInformation.prototype.serialize = function(output) {
  this.serializeAs_PrismFightersInformation(output);
};

PrismFightersInformation.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightersInformation(input);
};

PrismFightersInformation.prototype.serializeAs_PrismFightersInformation = function(param1) {
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
  } else {
    param1.writeVarShort(this.subAreaId);
    this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
    param1.writeShort(this.allyCharactersInformations.length);
    var _loc2_ = 0;
    while (_loc2_ < this.allyCharactersInformations.length) {
      param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
      (this.allyCharactersInformations[_loc2_]).serialize(param1);
      _loc2_++;
    }
    param1.writeShort(this.enemyCharactersInformations.length);
    var _loc3_ = 0;
    while (_loc3_ < this.enemyCharactersInformations.length) {
      param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
      (this.enemyCharactersInformations[_loc3_]).serialize(param1);
      _loc3_++;
    }
    return;
  }
};

PrismFightersInformation.prototype.deserializeAs_PrismFightersInformation = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = null;
  var _loc8_ = 0;
  var _loc9_ = null;
  this.subAreaId = param1.readVarUhShort();
  if (this.subAreaId < 0) {
    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightersInformation.subAreaId.");
  } else {
    this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
    this.waitingForHelpInfo.deserialize(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc6_ = param1.readUnsignedShort();
      _loc7_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
      _loc7_.deserialize(param1);
      this.allyCharactersInformations.push(_loc7_);
      _loc3_++;
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc8_ = param1.readUnsignedShort();
      _loc9_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
      _loc9_.deserialize(param1);
      this.enemyCharactersInformations.push(_loc9_);
      _loc5_++;
    }
    return;
  }
};

PrismFightersInformation.prototype.getTypeId = function() {
  return 443;
};

PrismFightersInformation.prototype.getClassName = function() {
  return 'PrismFightersInformation';
};

module.exports.id = 443;
module.exports.class = PrismFightersInformation;
module.exports.getInstance = function() {
  return new PrismFightersInformation();
};