var HumanInformations = function() {
  this.restrictions;
  this.sex = false;
  this.options = [];
};



HumanInformations.prototype.serialize = function(output) {
  this.serializeAs_HumanInformations(output);
};

HumanInformations.prototype.deserialize = function(input) {
  this.deserializeAs_HumanInformations(input);
};

HumanInformations.prototype.serializeAs_HumanInformations = function(output) {
  this.restrictions.serializeAs_ActorRestrictionsInformations(output);
  output.writeBoolean(this.sex);
  output.writeShort(this.options.length);
  var _i3 = 0;
  while (_i3 < this.options.length) {
    output.writeShort((this.options[_i3]).getTypeId());
    (this.options[_i3]).serialize(output);
    _i3++;
  };
};

HumanInformations.prototype.deserializeAs_HumanInformations = function(input) {
  var _id3 = 0;
  var _item3;
  this.restrictions = new ActorRestrictionsInformations();
  this.restrictions.deserialize(input);
  this.sex = input.readBoolean();
  var _optionsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _optionsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(HumanOption, _id3);
    _item3.deserialize(input);
    this.options.push(_item3);
    _i3++;
  };
};

HumanInformations.prototype.getTypeId = function() {
  return 157;
};

HumanInformations.prototype.getClassName = function() {
  return 'HumanInformations';
};

module.exports.id = 157;
module.exports.class = HumanInformations;