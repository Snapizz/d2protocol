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
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    if (this.objectGID < 0) {
      throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
    } else {
      param1.writeVarShort(this.objectGID);
      return;
    }
  }
};

ObjectItemInRolePlay.prototype.deserializeAs_ObjectItemInRolePlay = function(input) {
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of ObjectItemInRolePlay.cellId.");
  } else {
    this.objectGID = param1.readVarUhShort();
    if (this.objectGID < 0) {
      throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemInRolePlay.objectGID.");
    } else {
      return;
    }
  }
};

ObjectItemInRolePlay.prototype.getTypeId = function() {
  return 198;
};

ObjectItemInRolePlay.prototype.getClassName = function() {
  return 'ObjectItemInRolePlay';
};

module.exports.id = 198;
module.exports.class = ObjectItemInRolePlay;