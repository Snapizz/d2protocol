var ProtectedEntityWaitingForHelpInfo = function() {
  this.timeLeftBeforeFight = 0;
  this.waitTimeForPlacement = 0;
  this.nbPositionForDefensors = 0;
};



ProtectedEntityWaitingForHelpInfo.prototype.serialize = function(output) {
  this.serializeAs_ProtectedEntityWaitingForHelpInfo(output);
};

ProtectedEntityWaitingForHelpInfo.prototype.deserialize = function(input) {
  this.deserializeAs_ProtectedEntityWaitingForHelpInfo(input);
};

ProtectedEntityWaitingForHelpInfo.prototype.serializeAs_ProtectedEntityWaitingForHelpInfo = function(param1) {
  param1.writeInt(this.timeLeftBeforeFight);
  param1.writeInt(this.waitTimeForPlacement);
  if (this.nbPositionForDefensors < 0) {
    throw new Error("Forbidden value (" + this.nbPositionForDefensors + ") on element nbPositionForDefensors.");
  } else {
    param1.writeByte(this.nbPositionForDefensors);
    return;
  }
};

ProtectedEntityWaitingForHelpInfo.prototype.deserializeAs_ProtectedEntityWaitingForHelpInfo = function(param1) {
  this.timeLeftBeforeFight = param1.readInt();
  this.waitTimeForPlacement = param1.readInt();
  this.nbPositionForDefensors = param1.readByte();
  if (this.nbPositionForDefensors < 0) {
    throw new Error("Forbidden value (" + this.nbPositionForDefensors + ") on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.");
  } else {
    return;
  }
};

ProtectedEntityWaitingForHelpInfo.prototype.getTypeId = function() {
  return 186;
};

ProtectedEntityWaitingForHelpInfo.prototype.getClassName = function() {
  return 'ProtectedEntityWaitingForHelpInfo';
};

module.exports.id = 186;
module.exports.class = ProtectedEntityWaitingForHelpInfo;