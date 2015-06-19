var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceInvitedMessage = function() {
  this.recruterId = 0;
  this.recruterName = "";
  this.allianceInfo;
};

util.inherits(AllianceInvitedMessage, BaseMessage);

AllianceInvitedMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceInvitedMessage(output);
};

AllianceInvitedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceInvitedMessage(input);
};

AllianceInvitedMessage.prototype.serializeAs_AllianceInvitedMessage = function(output) {
  if (this.recruterId < 0) {
    throw (new Error((("Forbidden value (" + this.recruterId) + ") on element recruterId.")));
  };
  output.writeVarInt(this.recruterId);
  output.writeUTF(this.recruterName);
  this.allianceInfo.serializeAs_BasicNamedAllianceInformations(output);
};

AllianceInvitedMessage.prototype.deserializeAs_AllianceInvitedMessage = function(input) {
  this.recruterId = input.readVarUhInt();
  if (this.recruterId < 0) {
    throw (new Error((("Forbidden value (" + this.recruterId) + ") on element of AllianceInvitedMessage.recruterId.")));
  };
  this.recruterName = input.readUTF();
  this.allianceInfo = new BasicNamedAllianceInformations();
  this.allianceInfo.deserialize(input);
};

AllianceInvitedMessage.prototype.getMessageId = function() {
  return 6397;
};

AllianceInvitedMessage.prototype.getClassName = function() {
  return 'AllianceInvitedMessage';
};

module.exports.id = 6397;
module.exports.class = AllianceInvitedMessage;