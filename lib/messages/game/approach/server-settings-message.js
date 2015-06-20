var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ServerSettingsMessage = function() {
  this.lang = "";
  this.community = 0;
  this.gameType = 0;
};

util.inherits(ServerSettingsMessage, BaseMessage);

ServerSettingsMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerSettingsMessage(output);
};

ServerSettingsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSettingsMessage(input);
};

ServerSettingsMessage.prototype.serializeAs_ServerSettingsMessage = function(param1) {
  param1.writeUTF(this.lang);
  if (this.community < 0) {
    throw new Error("Forbidden value (" + this.community + ") on element community.");
  } else {
    param1.writeByte(this.community);
    if (this.gameType < 0) {
      throw new Error("Forbidden value (" + this.gameType + ") on element gameType.");
    } else {
      param1.writeByte(this.gameType);
      return;
    }
  }
};

ServerSettingsMessage.prototype.deserializeAs_ServerSettingsMessage = function(param1) {
  this.lang = param1.readUTF();
  this.community = param1.readByte();
  if (this.community < 0) {
    throw new Error("Forbidden value (" + this.community + ") on element of ServerSettingsMessage.community.");
  } else {
    this.gameType = param1.readByte();
    if (this.gameType < 0) {
      throw new Error("Forbidden value (" + this.gameType + ") on element of ServerSettingsMessage.gameType.");
    } else {
      return;
    }
  }
};

ServerSettingsMessage.prototype.getMessageId = function() {
  return 6340;
};

ServerSettingsMessage.prototype.getClassName = function() {
  return 'ServerSettingsMessage';
};

module.exports.id = 6340;
module.exports.class = ServerSettingsMessage;
module.exports.getInstance = function() {
  return new ServerSettingsMessage();
};