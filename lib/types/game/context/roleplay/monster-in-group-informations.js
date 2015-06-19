var BaseMessage = require('./monster-in-group-light-informations.js').class,
  util = require('util');

var MonsterInGroupInformations = function() {
  this.look;
};

util.inherits(MonsterInGroupInformations, BaseMessage);

MonsterInGroupInformations.prototype.serialize = function(output) {
  this.serializeAs_MonsterInGroupInformations(output);
};

MonsterInGroupInformations.prototype.deserialize = function(input) {
  this.deserializeAs_MonsterInGroupInformations(input);
};

MonsterInGroupInformations.prototype.serializeAs_MonsterInGroupInformations = function(output) {
  this.serializeAs_MonsterInGroupLightInformations(output);
  this.look.serializeAs_EntityLook(output);
};

MonsterInGroupInformations.prototype.deserializeAs_MonsterInGroupInformations = function(input) {
  this.deserialize(input);
  this.look = new EntityLook();
  this.look.deserialize(input);
};

MonsterInGroupInformations.prototype.getTypeId = function() {
  return 144;
};

MonsterInGroupInformations.prototype.getClassName = function() {
  return 'MonsterInGroupInformations';
};

module.exports.id = 144;
module.exports.class = MonsterInGroupInformations;