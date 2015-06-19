var BaseMessage = require('./human-option.js').class,
  util = require('util');

var HumanOptionObjectUse = function() {
  this.delayTypeId = 0;
  this.delayEndTime = 0;
  this.objectGID = 0;
};

util.inherits(HumanOptionObjectUse, BaseMessage);

HumanOptionObjectUse.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionObjectUse(output);
};

HumanOptionObjectUse.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionObjectUse(input);
};

HumanOptionObjectUse.prototype.serializeAs_HumanOptionObjectUse = function(output) {
  this.serializeAs_HumanOption(output);
  output.writeByte(this.delayTypeId);
  if ((((this.delayEndTime < 0)) || ((this.delayEndTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.delayEndTime) + ") on element delayEndTime.")));
  };
  output.writeDouble(this.delayEndTime);
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
};

HumanOptionObjectUse.prototype.deserializeAs_HumanOptionObjectUse = function(input) {
  this.deserialize(input);
  this.delayTypeId = input.readByte();
  if (this.delayTypeId < 0) {
    throw (new Error((("Forbidden value (" + this.delayTypeId) + ") on element of HumanOptionObjectUse.delayTypeId.")));
  };
  this.delayEndTime = input.readDouble();
  if ((((this.delayEndTime < 0)) || ((this.delayEndTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.delayEndTime) + ") on element of HumanOptionObjectUse.delayEndTime.")));
  };
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of HumanOptionObjectUse.objectGID.")));
  };
};

HumanOptionObjectUse.prototype.getTypeId = function() {
  return 449;
};

HumanOptionObjectUse.prototype.getClassName = function() {
  return 'HumanOptionObjectUse';
};

module.exports.id = 449;
module.exports.class = HumanOptionObjectUse;