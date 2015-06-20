var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SpellForgottenMessage = function() {
  this.spellsId = [];
  this.boostPoint = 0;
};

util.inherits(SpellForgottenMessage, BaseMessage);

SpellForgottenMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellForgottenMessage(output);
};

SpellForgottenMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellForgottenMessage(input);
};

SpellForgottenMessage.prototype.serializeAs_SpellForgottenMessage = function(output) {
  output.writeShort(this.spellsId.length);
  var _i1 = 0;
  while (_i1 < this.spellsId.length) {
    if (this.spellsId[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.spellsId[_i1]) + ") on element 1 (starting at 1) of spellsId.")));
    };
    output.writeVarShort(this.spellsId[_i1]);
    _i1++;
  };
  if (this.boostPoint < 0) {
    throw (new Error((("Forbidden value (" + this.boostPoint) + ") on element boostPoint.")));
  };
  output.writeVarShort(this.boostPoint);
};

SpellForgottenMessage.prototype.deserializeAs_SpellForgottenMessage = function(input) {
  var _val1 = 0;
  var _spellsIdLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _spellsIdLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of spellsId.")));
    };
    this.spellsId.push(_val1);
    _i1++;
  };
  this.boostPoint = input.readVarUhShort();
  if (this.boostPoint < 0) {
    throw (new Error((("Forbidden value (" + this.boostPoint) + ") on element of SpellForgottenMessage.boostPoint.")));
  };
};

SpellForgottenMessage.prototype.getMessageId = function() {
  return 5834;
};

SpellForgottenMessage.prototype.getClassName = function() {
  return 'SpellForgottenMessage';
};

module.exports.id = 5834;
module.exports.class = SpellForgottenMessage;