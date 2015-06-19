var BaseMessage = require('./basic-alliance-informations.js').class,
  util = require('util');

var BasicNamedAllianceInformations = function() {
  this.allianceName = "";
};

util.inherits(BasicNamedAllianceInformations, BaseMessage);

BasicNamedAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_BasicNamedAllianceInformations(output);
};

BasicNamedAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_BasicNamedAllianceInformations(input);
};

BasicNamedAllianceInformations.prototype.serializeAs_BasicNamedAllianceInformations = function(output) {
  this.serializeAs_BasicAllianceInformations(output);
  output.writeUTF(this.allianceName);
};

BasicNamedAllianceInformations.prototype.deserializeAs_BasicNamedAllianceInformations = function(input) {
  this.deserialize(input);
  this.allianceName = input.readUTF();
};

BasicNamedAllianceInformations.prototype.getTypeId = function() {
  return 418;
};

BasicNamedAllianceInformations.prototype.getClassName = function() {
  return 'BasicNamedAllianceInformations';
};

module.exports.id = 418;
module.exports.class = BasicNamedAllianceInformations;