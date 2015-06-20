var BaseMessage = require('./human-option.js').class,
  util = require('util');

var HumanOptionFollowers = function() {
  this.followingCharactersLook = [];
};

util.inherits(HumanOptionFollowers, BaseMessage);

HumanOptionFollowers.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionFollowers(output);
};

HumanOptionFollowers.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionFollowers(input);
};

HumanOptionFollowers.prototype.serializeAs_HumanOptionFollowers = function(output) {
  this.serializeAs_HumanOption(output);
  output.writeShort(this.followingCharactersLook.length);
  var _i1 = 0;
  while (_i1 < this.followingCharactersLook.length) {
    (this.followingCharactersLook[_i1]).serializeAs_IndexedEntityLook(output);
    _i1++;
  };
};

HumanOptionFollowers.prototype.deserializeAs_HumanOptionFollowers = function(input) {
  var _item1;
  this.deserialize(input);
  var _followingCharactersLookLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _followingCharactersLookLen) {
    _item1 = new IndexedEntityLook();
    _item1.deserialize(input);
    this.followingCharactersLook.push(_item1);
    _i1++;
  };
};

HumanOptionFollowers.prototype.getTypeId = function() {
  return 410;
};

HumanOptionFollowers.prototype.getClassName = function() {
  return 'HumanOptionFollowers';
};

module.exports.id = 410;
module.exports.class = HumanOptionFollowers;