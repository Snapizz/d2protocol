var ObjectItemInRolePlay = function() {
  this.cellId = 0;
  this.objectGID = 0;
};



ObjectItemInRolePlay.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemInRolePlay(output);
};

ObjectItemInRolePlay.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemInRolePlay(input);
};

ObjectItemInRolePlay.prototype.serializeAs_ObjectItemInRolePlay = function(output) {
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
};

ObjectItemInRolePlay.prototype.deserializeAs_ObjectItemInRolePlay = function(input) {
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of ObjectItemInRolePlay.cellId.")));
  };
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of ObjectItemInRolePlay.objectGID.")));
  };
};

ObjectItemInRolePlay.prototype.getTypeId = function() {
  return 198;
};

ObjectItemInRolePlay.prototype.getClassName = function() {
  return 'ObjectItemInRolePlay';
};

module.exports.id = 198;
module.exports.class = ObjectItemInRolePlay;