var BaseMessage = require('../../social/abstract-social-group-infos.js').class,
  util = require('util');

var BasicAllianceInformations = function() {
  this.allianceId = 0;
  this.allianceTag = "";
};

util.inherits(BasicAllianceInformations, BaseMessage);

BasicAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_BasicAllianceInformations(output);
};

BasicAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_BasicAllianceInformations(input);
};

BasicAllianceInformations.prototype.serializeAs_BasicAllianceInformations = function(output) {
  this.serializeAs_AbstractSocialGroupInfos(output);
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element allianceId.")));
  };
  output.writeVarInt(this.allianceId);
  output.writeUTF(this.allianceTag);
};

BasicAllianceInformations.prototype.deserializeAs_BasicAllianceInformations = function(input) {
  this.deserialize(input);
  this.allianceId = input.readVarUhInt();
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element of BasicAllianceInformations.allianceId.")));
  };
  this.allianceTag = input.readUTF();
};

BasicAllianceInformations.prototype.getTypeId = function() {
  return 419;
};

BasicAllianceInformations.prototype.getClassName = function() {
  return 'BasicAllianceInformations';
};

module.exports.id = 419;
module.exports.class = BasicAllianceInformations;