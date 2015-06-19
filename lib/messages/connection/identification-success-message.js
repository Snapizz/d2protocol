var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationSuccessMessage = function() {
  this.login = "";
  this.nickname = "";
  this.accountId = 0;
  this.communityId = 0;
  this.hasRights = false;
  this.secretQuestion = "";
  this.accountCreation = 0;
  this.subscriptionElapsedDuration = 0;
  this.subscriptionEndDate = 0;
  this.wasAlreadyConnected = false;
};

util.inherits(IdentificationSuccessMessage, BaseMessage);

IdentificationSuccessMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationSuccessMessage(output);
};

IdentificationSuccessMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationSuccessMessage(input);
};

IdentificationSuccessMessage.prototype.serializeAs_IdentificationSuccessMessage = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.hasRights);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.wasAlreadyConnected);
  output.writeByte(_box0);
  output.writeUTF(this.login);
  output.writeUTF(this.nickname);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  if (this.communityId < 0) {
    throw (new Error((("Forbidden value (" + this.communityId) + ") on element communityId.")));
  };
  output.writeByte(this.communityId);
  output.writeUTF(this.secretQuestion);
  if ((((this.accountCreation < 0)) || ((this.accountCreation > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.accountCreation) + ") on element accountCreation.")));
  };
  output.writeDouble(this.accountCreation);
  if ((((this.subscriptionElapsedDuration < 0)) || ((this.subscriptionElapsedDuration > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.subscriptionElapsedDuration) + ") on element subscriptionElapsedDuration.")));
  };
  output.writeDouble(this.subscriptionElapsedDuration);
  if ((((this.subscriptionEndDate < 0)) || ((this.subscriptionEndDate > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.subscriptionEndDate) + ") on element subscriptionEndDate.")));
  };
  output.writeDouble(this.subscriptionEndDate);
};

IdentificationSuccessMessage.prototype.deserializeAs_IdentificationSuccessMessage = function(input) {
  var _box0 = input.readByte();
  this.hasRights = BooleanByteWrapper.getFlag(_box0, 0);
  this.wasAlreadyConnected = BooleanByteWrapper.getFlag(_box0, 1);
  this.login = input.readUTF();
  this.nickname = input.readUTF();
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of IdentificationSuccessMessage.accountId.")));
  };
  this.communityId = input.readByte();
  if (this.communityId < 0) {
    throw (new Error((("Forbidden value (" + this.communityId) + ") on element of IdentificationSuccessMessage.communityId.")));
  };
  this.secretQuestion = input.readUTF();
  this.accountCreation = input.readDouble();
  if ((((this.accountCreation < 0)) || ((this.accountCreation > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.accountCreation) + ") on element of IdentificationSuccessMessage.accountCreation.")));
  };
  this.subscriptionElapsedDuration = input.readDouble();
  if ((((this.subscriptionElapsedDuration < 0)) || ((this.subscriptionElapsedDuration > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.subscriptionElapsedDuration) + ") on element of IdentificationSuccessMessage.subscriptionElapsedDuration.")));
  };
  this.subscriptionEndDate = input.readDouble();
  if ((((this.subscriptionEndDate < 0)) || ((this.subscriptionEndDate > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.subscriptionEndDate) + ") on element of IdentificationSuccessMessage.subscriptionEndDate.")));
  };
};

IdentificationSuccessMessage.prototype.getMessageId = function() {
  return 22;
};

IdentificationSuccessMessage.prototype.getClassName = function() {
  return 'IdentificationSuccessMessage';
};

module.exports.id = 22;
module.exports.class = IdentificationSuccessMessage;