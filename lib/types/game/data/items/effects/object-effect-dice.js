var BaseMessage = require('./object-effect.js').class,
  util = require('util');

var ObjectEffectDice = function() {
  this.diceNum = 0;
  this.diceSide = 0;
  this.diceConst = 0;
};

util.inherits(ObjectEffectDice, BaseMessage);

ObjectEffectDice.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectDice(output);
};

ObjectEffectDice.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectDice(input);
};

ObjectEffectDice.prototype.serializeAs_ObjectEffectDice = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.diceNum < 0) {
    throw (new Error((("Forbidden value (" + this.diceNum) + ") on element diceNum.")));
  };
  output.writeVarShort(this.diceNum);
  if (this.diceSide < 0) {
    throw (new Error((("Forbidden value (" + this.diceSide) + ") on element diceSide.")));
  };
  output.writeVarShort(this.diceSide);
  if (this.diceConst < 0) {
    throw (new Error((("Forbidden value (" + this.diceConst) + ") on element diceConst.")));
  };
  output.writeVarShort(this.diceConst);
};

ObjectEffectDice.prototype.deserializeAs_ObjectEffectDice = function(input) {
  this.deserialize(input);
  this.diceNum = input.readVarUhShort();
  if (this.diceNum < 0) {
    throw (new Error((("Forbidden value (" + this.diceNum) + ") on element of ObjectEffectDice.diceNum.")));
  };
  this.diceSide = input.readVarUhShort();
  if (this.diceSide < 0) {
    throw (new Error((("Forbidden value (" + this.diceSide) + ") on element of ObjectEffectDice.diceSide.")));
  };
  this.diceConst = input.readVarUhShort();
  if (this.diceConst < 0) {
    throw (new Error((("Forbidden value (" + this.diceConst) + ") on element of ObjectEffectDice.diceConst.")));
  };
};

ObjectEffectDice.prototype.getTypeId = function() {
  return 73;
};

ObjectEffectDice.prototype.getClassName = function() {
  return 'ObjectEffectDice';
};

module.exports.id = 73;
module.exports.class = ObjectEffectDice;