var BaseMessage = require('./group-monster-static-informations.js').class,
  util = require('util');

var GroupMonsterStaticInformationsWithAlternatives = function() {
  this.alternatives = [];
};

util.inherits(GroupMonsterStaticInformationsWithAlternatives, BaseMessage);

GroupMonsterStaticInformationsWithAlternatives.prototype.serialize = function(output) {
  this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(output);
};

GroupMonsterStaticInformationsWithAlternatives.prototype.deserialize = function(input) {
  this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(input);
};

GroupMonsterStaticInformationsWithAlternatives.prototype.serializeAs_GroupMonsterStaticInformationsWithAlternatives = function(output) {
  this.serializeAs_GroupMonsterStaticInformations(output);
  output.writeShort(this.alternatives.length);
  var _i1;
  while (_i1 < this.alternatives.length) {
    (this.alternatives[_i1]).serializeAs_AlternativeMonstersInGroupLightInformations(output);
    _i1++;
  };
};

GroupMonsterStaticInformationsWithAlternatives.prototype.deserializeAs_GroupMonsterStaticInformationsWithAlternatives = function(input) {
  var _item1;
  this.deserialize(input);
  var _alternativesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _alternativesLen) {
    _item1 = new AlternativeMonstersInGroupLightInformations();
    _item1.deserialize(input);
    this.alternatives.push(_item1);
    _i1++;
  };
};

GroupMonsterStaticInformationsWithAlternatives.prototype.getTypeId = function() {
  return 396;
};

GroupMonsterStaticInformationsWithAlternatives.prototype.getClassName = function() {
  return 'GroupMonsterStaticInformationsWithAlternatives';
};

module.exports.id = 396;
module.exports.class = GroupMonsterStaticInformationsWithAlternatives;