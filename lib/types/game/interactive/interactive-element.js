var InteractiveElement = function() {
  this.elementId = 0;
  this.elementTypeId = 0;
  this.enabledSkills = [];
  this.disabledSkills = [];
};



InteractiveElement.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElement(output);
};

InteractiveElement.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElement(input);
};

InteractiveElement.prototype.serializeAs_InteractiveElement = function(output) {
  if (this.elementId < 0) {
    throw (new Error((("Forbidden value (" + this.elementId) + ") on element elementId.")));
  };
  output.writeInt(this.elementId);
  output.writeInt(this.elementTypeId);
  output.writeShort(this.enabledSkills.length);
  var _i3 = 0;
  while (_i3 < this.enabledSkills.length) {
    output.writeShort((this.enabledSkills[_i3]).getTypeId());
    (this.enabledSkills[_i3]).serialize(output);
    _i3++;
  };
  output.writeShort(this.disabledSkills.length);
  var _i4 = 0;
  while (_i4 < this.disabledSkills.length) {
    output.writeShort((this.disabledSkills[_i4]).getTypeId());
    (this.disabledSkills[_i4]).serialize(output);
    _i4++;
  };
};

InteractiveElement.prototype.deserializeAs_InteractiveElement = function(input) {
  var _id3 = 0;
  var _item3;
  var _id4 = 0;
  var _item4;
  this.elementId = input.readInt();
  if (this.elementId < 0) {
    throw (new Error((("Forbidden value (" + this.elementId) + ") on element of InteractiveElement.elementId.")));
  };
  this.elementTypeId = input.readInt();
  var _enabledSkillsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _enabledSkillsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(InteractiveElementSkill, _id3);
    _item3.deserialize(input);
    this.enabledSkills.push(_item3);
    _i3++;
  };
  var _disabledSkillsLen = input.readUnsignedShort();
  var _i4 = 0;
  while (_i4 < _disabledSkillsLen) {
    _id4 = input.readUnsignedShort();
    _item4 = ProtocolTypeManager.getInstance(InteractiveElementSkill, _id4);
    _item4.deserialize(input);
    this.disabledSkills.push(_item4);
    _i4++;
  };
};

InteractiveElement.prototype.getTypeId = function() {
  return 80;
};

InteractiveElement.prototype.getClassName = function() {
  return 'InteractiveElement';
};

module.exports.id = 80;
module.exports.class = InteractiveElement;