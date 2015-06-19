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

ProtectedEntityWaitingForHelpInfo.prototype.serializeAs_ProtectedEntityWaitingForHelpInfo = function(output) {
  output.writeInt(this.timeLeftBeforeFight);
  output.writeInt(this.waitTimeForPlacement);
  if (this.nbPositionForDefensors < 0) {
    throw (new Error((("Forbidden value (" + this.nbPositionForDefensors) + ") on element nbPositionForDefensors.")));
  };
  output.writeByte(this.nbPositionForDefensors);
};

ProtectedEntityWaitingForHelpInfo.prototype.deserializeAs_ProtectedEntityWaitingForHelpInfo = function(input) {
  this.timeLeftBeforeFight = input.readInt();
  this.waitTimeForPlacement = input.readInt();
  this.nbPositionForDefensors = input.readByte();
  if (this.nbPositionForDefensors < 0) {
    throw (new Error((("Forbidden value (" + this.nbPositionForDefensors) + ") on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.")));
  };
};

ProtectedEntityWaitingForHelpInfo.prototype.getTypeId = function() {
  return 186;
};

ProtectedEntityWaitingForHelpInfo.prototype.getClassName = function() {
  return 'ProtectedEntityWaitingForHelpInfo';
};

module.exports.id = 186;
module.exports.class = ProtectedEntityWaitingForHelpInfo;