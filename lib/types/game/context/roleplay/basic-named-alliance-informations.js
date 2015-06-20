var BasicNamedAllianceInformations = function() {
  this.allianceName = "";
};



BasicNamedAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_BasicNamedAllianceInformations(output);
};

BasicNamedAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_BasicNamedAllianceInformations(input);
};

BasicNamedAllianceInformations.prototype.serializeAs_BasicNamedAllianceInformations = function(output) {
  this.serializeAs_BasicAllianceInformations(param1);
  param1.writeUTF(this.allianceName);
};

BasicNamedAllianceInformations.prototype.deserializeAs_BasicNamedAllianceInformations = function(input) {
  this.deserialize(param1);
  this.allianceName = param1.readUTF();
};

BasicNamedAllianceInformations.prototype.getTypeId = function() {
  return 418;
};

BasicNamedAllianceInformations.prototype.getClassName = function() {
  return 'BasicNamedAllianceInformations';
};

module.exports.id = 418;
module.exports.class = BasicNamedAllianceInformations;