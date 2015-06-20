var BasicAllianceInformations = function() {
  this.allianceId = 0;
  this.allianceTag = "";
};



BasicAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_BasicAllianceInformations(output);
};

BasicAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_BasicAllianceInformations(input);
};

BasicAllianceInformations.prototype.serializeAs_BasicAllianceInformations = function(output) {
  super.serializeAs_AbstractSocialGroupInfos(param1);
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
  } else {
    param1.writeVarInt(this.allianceId);
    param1.writeUTF(this.allianceTag);
    return;
  }
};

BasicAllianceInformations.prototype.deserializeAs_BasicAllianceInformations = function(input) {
  super.deserialize(param1);
  this.allianceId = param1.readVarUhInt();
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element of BasicAllianceInformations.allianceId.");
  } else {
    this.allianceTag = param1.readUTF();
    return;
  }
};

BasicAllianceInformations.prototype.getTypeId = function() {
  return 419;
};

BasicAllianceInformations.prototype.getClassName = function() {
  return 'BasicAllianceInformations';
};

module.exports.id = 419;
module.exports.class = BasicAllianceInformations;