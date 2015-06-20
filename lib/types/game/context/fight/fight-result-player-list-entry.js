var BaseMessage = require('./fight-result-player-list-entry.js').class,
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

FightResultPlayerListEntry.prototype.serializeAs_FightResultPlayerListEntry = function(param1) {
  this.serializeAs_FightResultFighterListEntry(param1);
  if (this.level < 1 || this.level > 200) {
    throw new Error("Forbidden value (" + this.level + ") on element level.");
  } else {
    param1.writeByte(this.level);
    param1.writeShort(this.additional.length);
    var _loc2_ = 0;
    while (_loc2_ < this.additional.length) {
      param1.writeShort((this.additional[_loc2_]).getTypeId());
      (this.additional[_loc2_]).serialize(param1);
      _loc2_++;
    }
    return;
  }
};

FightResultPlayerListEntry.prototype.deserializeAs_FightResultPlayerListEntry = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.deserialize(param1);
  this.level = param1.readUnsignedByte();
  if (this.level < 1 || this.level > 200) {
    throw new Error("Forbidden value (" + this.level + ") on element of FightResultPlayerListEntry.level.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUnsignedShort();
      _loc5_ = ProtocolTypeManager.getInstance(FightResultAdditionalData, _loc4_);
      _loc5_.deserialize(param1);
      this.additional.push(_loc5_);
      _loc3_++;
    }
    return;
  }
};

FightResultPlayerListEntry.prototype.getTypeId = function() {
  return 24;
};

FightResultPlayerListEntry.prototype.getClassName = function() {
  return 'FightResultPlayerListEntry';
};

module.exports.id = 24;
module.exports.class = FightResultPlayerListEntry;
module.exports.getInstance = function() {
  return new FightResultPlayerListEntry();
};