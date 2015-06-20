var IgnoredInformations = function() {

};



IgnoredInformations.prototype.serialize = function(output) {
  this.serializeAs_IgnoredInformations(output);
};

IgnoredInformations.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredInformations(input);
};

IgnoredInformations.prototype.serializeAs_IgnoredInformations = function(output) {
  this.serializeAs_AbstractContactInformations(param1);
};

IgnoredInformations.prototype.deserializeAs_IgnoredInformations = function(input) {
  this.deserialize(param1);
};

IgnoredInformations.prototype.getTypeId = function() {
  return 106;
};

IgnoredInformations.prototype.getClassName = function() {
  return 'IgnoredInformations';
};

module.exports.id = 106;
module.exports.class = IgnoredInformations;