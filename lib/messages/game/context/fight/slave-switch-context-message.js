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
  output.writeInt(this.masterId);
  output.writeInt(this.slaveId);
  output.writeShort(this.slaveSpells.length);
  var _i3 = 0;
  while (_i3 < this.slaveSpells.length) {
    (this.slaveSpells[_i3]).serializeAs_SpellItem(output);
    _i3++;
  };
  this.slaveStats.serializeAs_CharacterCharacteristicsInformations(output);
  output.writeShort(this.shortcuts.length);
  var _i5 = 0;
  while (_i5 < this.shortcuts.length) {
    output.writeShort((this.shortcuts[_i5]).getTypeId());
    (this.shortcuts[_i5]).serialize(output);
    _i5++;
  };
};

SlaveSwitchContextMessage.prototype.deserializeAs_SlaveSwitchContextMessage = function(input) {
  var _item3;
  var _id5 = 0;
  var _item5;
  this.masterId = input.readInt();
  this.slaveId = input.readInt();
  var _slaveSpellsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _slaveSpellsLen) {
    _item3 = new SpellItem();
    _item3.deserialize(input);
    this.slaveSpells.push(_item3);
    _i3++;
  };
  this.slaveStats = new CharacterCharacteristicsInformations();
  this.slaveStats.deserialize(input);
  var _shortcutsLen = input.readUnsignedShort();
  var _i5 = 0;
  while (_i5 < _shortcutsLen) {
    _id5 = input.readUnsignedShort();
    _item5 = ProtocolTypeManager.getInstance(Shortcut, _id5);
    _item5.deserialize(input);
    this.shortcuts.push(_item5);
    _i5++;
  };
};

SlaveSwitchContextMessage.prototype.getMessageId = function() {
  return 6214;
};

SlaveSwitchContextMessage.prototype.getClassName = function() {
  return 'SlaveSwitchContextMessage';
};

module.exports.id = 6214;
module.exports.class = SlaveSwitchContextMessage;