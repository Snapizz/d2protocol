var BaseMessage = require('./human-informations.js').class,
  util = require('util');

var HumanInformations = function() {
  this.restrictions;
  this.sex = false;
  this.options = [];
};

util.inherits(HumanInformations, BaseMessage);

HumanInformations.prototype.serialize = function(output) {
  this.serializeAs_HumanInformations(output);
};

HumanInformations.prototype.deserialize = function(input) {
  this.deserializeAs_HumanInformations(input);
};

HumanInformations.prototype.serializeAs_HumanInformations = function(param1) {
  this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
  param1.writeBoolean(this.sex);
  param1.writeShort(this.options.length);
  var _loc2_ = 0;
  while (_loc2_ < this.options.length) {
    param1.writeShort((this.options[_loc2_]).getTypeId());
    (this.options[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

HumanInformations.prototype.deserializeAs_HumanInformations = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.restrictions = new ActorRestrictionsInformations();
  this.restrictions.deserialize(param1);
  this.sex = param1.readBoolean();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedShort();
    _loc5_ = ProtocolTypeManager.getInstance(HumanOption, _loc4_);
    _loc5_.deserialize(param1);
    this.options.push(_loc5_);
    _loc3_++;
  }
};

HumanInformations.prototype.getTypeId = function() {
  return 157;
};

HumanInformations.prototype.getClassName = function() {
  return 'HumanInformations';
};

module.exports.id = 157;
module.exports.class = HumanInformations;
module.exports.getInstance = function() {
  return new HumanInformations();
};