var FightLoot = function() {
  this.objects = [];
  this.kamas = 0;
};



FightLoot.prototype.serialize = function(output) {
  this.serializeAs_FightLoot(output);
};

FightLoot.prototype.deserialize = function(input) {
  this.deserializeAs_FightLoot(input);
};

FightLoot.prototype.serializeAs_FightLoot = function(output) {
  output.writeShort(this.objects.length);
  var _i1;
  while (_i1 < this.objects.length) {
    if (this.objects[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.objects[_i1]) + ") on element 1 (starting at 1) of objects.")));
    };
    output.writeVarShort(this.objects[_i1]);
    _i1++;
  };
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element kamas.")));
  };
  output.writeVarInt(this.kamas);
};

FightLoot.prototype.deserializeAs_FightLoot = function(input) {
  var _val1;
  var _objectsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _objectsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of objects.")));
    };
    this.objects.push(_val1);
    _i1++;
  };
  this.kamas = input.readVarUhInt();
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element of FightLoot.kamas.")));
  };
};

FightLoot.prototype.getTypeId = function() {
  return 41;
};

FightLoot.prototype.getClassName = function() {
  return 'FightLoot';
};

module.exports.id = 41;
module.exports.class = FightLoot;