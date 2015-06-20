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

SpellListMessage.prototype.serializeAs_SpellListMessage = function(param1) {
  param1.writeBoolean(this.spellPrevisualization);
  param1.writeShort(this.spells.length);
  var _loc2_ = 0;
  while (_loc2_ < this.spells.length) {
    (this.spells[_loc2_]).serializeAs_SpellItem(param1);
    _loc2_++;
  }
};

SpellListMessage.prototype.deserializeAs_SpellListMessage = function(param1) {
  var _loc4_ = null;
  this.spellPrevisualization = param1.readBoolean();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new SpellItem();
    _loc4_.deserialize(param1);
    this.spells.push(_loc4_);
    _loc3_++;
  }
};

SpellListMessage.prototype.getMessageId = function() {
  return 1200;
};

SpellListMessage.prototype.getClassName = function() {
  return 'SpellListMessage';
};

module.exports.id = 1200;
module.exports.class = SpellListMessage;