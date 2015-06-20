var ServerSessionConstant = function() {
  this.id = 0;
};



ServerSessionConstant.prototype.serialize = function(output) {
  this.serializeAs_ServerSessionConstant(output);
};

ServerSessionConstant.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSessionConstant(input);
};

ServerSessionConstant.prototype.serializeAs_ServerSessionConstant = function(param1) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeVarShort(this.id);
    return;
  }
};

ServerSessionConstant.prototype.deserializeAs_ServerSessionConstant = function(param1) {
  this.id = param1.readVarUhShort();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of ServerSessionConstant.id.");
  } else {
    return;
  }
};

ServerSessionConstant.prototype.getTypeId = function() {
  return 430;
};

ServerSessionConstant.prototype.getClassName = function() {
  return 'ServerSessionConstant';
};

module.exports.id = 430;
module.exports.class = ServerSessionConstant;