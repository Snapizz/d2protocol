var BaseMessage = require('./fight-result-fighter-list-entry.js').class,
  util = require('util');

var FightResultPlayerListEntry = function() {
  this.level = 0;
  this.additional = [];
};

util.inherits(FightResultPlayerListEntry, BaseMessage);

FightResultPlayerListEntry.prototype.serialize = function(output) {
  this.serializeAs_FightResultPlayerListEntry(output);
};

FightResultPlayerListEntry.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultPlayerListEntry(input);
};

FightResultPlayerListEntry.prototype.serializeAs_FightResultPlayerListEntry = function(output) {
  this.serializeAs_FightResultFighterListEntry(output);
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  output.writeShort(this.additional.length);
  var _i2;
  while (_i2 < this.additional.length) {
    output.writeShort((this.additional[_i2]).getTypeId());
    (this.additional[_i2]).serialize(output);
    _i2++;
  };
};

FightResultPlayerListEntry.prototype.deserializeAs_FightResultPlayerListEntry = function(input) {
  var _id2;
  var _item2;
  this.deserialize(input);
  this.level = input.readUnsignedByte();
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FightResultPlayerListEntry.level.")));
  };
  var _additionalLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _additionalLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(FightResultAdditionalData, _id2);
    _item2.deserialize(input);
    this.additional.push(_item2);
    _i2++;
  };
};

FightResultPlayerListEntry.prototype.getTypeId = function() {
  return 24;
};

FightResultPlayerListEntry.prototype.getClassName = function() {
  return 'FightResultPlayerListEntry';
};

module.exports.id = 24;
module.exports.class = FightResultPlayerListEntry;