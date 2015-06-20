var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SpellListMessage = function() {
  this.spellPrevisualization = false;
  this.spells = [];
};

util.inherits(SpellListMessage, BaseMessage);

SpellListMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellListMessage(output);
};

SpellListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellListMessage(input);
};

SpellListMessage.prototype.serializeAs_SpellListMessage = function(output) {
  output.writeBoolean(this.spellPrevisualization);
  output.writeShort(this.spells.length);
  var _i2 = 0;
  while (_i2 < this.spells.length) {
    (this.spells[_i2]).serializeAs_SpellItem(output);
    _i2++;
  };
};

SpellListMessage.prototype.deserializeAs_SpellListMessage = function(input) {
  var _item2;
  this.spellPrevisualization = input.readBoolean();
  var _spellsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _spellsLen) {
    _item2 = new SpellItem();
    _item2.deserialize(input);
    this.spells.push(_item2);
    _i2++;
  };
};

SpellListMessage.prototype.getMessageId = function() {
  return 1200;
};

SpellListMessage.prototype.getClassName = function() {
  return 'SpellListMessage';
};

module.exports.id = 1200;
module.exports.class = SpellListMessage;