var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SlaveSwitchContextMessage = function() {
  this.masterId = 0;
  this.slaveId = 0;
  this.slaveSpells = [];
  this.slaveStats;
  this.shortcuts = [];
};

util.inherits(SlaveSwitchContextMessage, BaseMessage);

SlaveSwitchContextMessage.prototype.serialize = function(output) {
  this.serializeAs_SlaveSwitchContextMessage(output);
};

SlaveSwitchContextMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SlaveSwitchContextMessage(input);
};

SlaveSwitchContextMessage.prototype.serializeAs_SlaveSwitchContextMessage = function(output) {
  param1.writeInt(this.masterId);
  param1.writeInt(this.slaveId);
  param1.writeShort(this.slaveSpells.length);
  var _loc2_ = 0;
  while (_loc2_ < this.slaveSpells.length) {
    (this.slaveSpells[_loc2_]).serializeAs_SpellItem(param1);
    _loc2_++;
  }
  this.slaveStats.serializeAs_CharacterCharacteristicsInformations(param1);
  param1.writeShort(this.shortcuts.length);
  var _loc3_ = 0;
  while (_loc3_ < this.shortcuts.length) {
    param1.writeShort((this.shortcuts[_loc3_]).getTypeId());
    (this.shortcuts[_loc3_]).serialize(param1);
    _loc3_++;
  }
};

SlaveSwitchContextMessage.prototype.deserializeAs_SlaveSwitchContextMessage = function(input) {
  var _loc6_ = null;
  var _loc7_ = 0;
  var _loc8_ = null;
  this.masterId = param1.readInt();
  this.slaveId = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = new SpellItem();
    _loc6_.deserialize(param1);
    this.slaveSpells.push(_loc6_);
    _loc3_++;
  }
  this.slaveStats = new CharacterCharacteristicsInformations();
  this.slaveStats.deserialize(param1);
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readUnsignedShort();
    _loc8_ = ProtocolTypeManager.getInstance(Shortcut, _loc7_);
    _loc8_.deserialize(param1);
    this.shortcuts.push(_loc8_);
    _loc5_++;
  }
};

SlaveSwitchContextMessage.prototype.getMessageId = function() {
  return 6214;
};

SlaveSwitchContextMessage.prototype.getClassName = function() {
  return 'SlaveSwitchContextMessage';
};

module.exports.id = 6214;
module.exports.class = SlaveSwitchContextMessage;