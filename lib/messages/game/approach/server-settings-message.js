var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ServerSettingsMessage.prototype.serializeAs_ServerSettingsMessage = function(output) {
  output.writeUTF(this.lang);
  if (this.community < 0) {
    throw (new Error((("Forbidden value (" + this.community) + ") on element community.")));
  };
  output.writeByte(this.community);
  if (this.gameType < 0) {
    throw (new Error((("Forbidden value (" + this.gameType) + ") on element gameType.")));
  };
  output.writeByte(this.gameType);
};

ServerSettingsMessage.prototype.deserializeAs_ServerSettingsMessage = function(input) {
  this.lang = input.readUTF();
  this.community = input.readByte();
  if (this.community < 0) {
    throw (new Error((("Forbidden value (" + this.community) + ") on element of ServerSettingsMessage.community.")));
  };
  this.gameType = input.readByte();
  if (this.gameType < 0) {
    throw (new Error((("Forbidden value (" + this.gameType) + ") on element of ServerSettingsMessage.gameType.")));
  };
};

ServerSettingsMessage.prototype.getMessageId = function() {
  return 6340;
};

ServerSettingsMessage.prototype.getClassName = function() {
  return 'ServerSettingsMessage';
};

module.exports.id = 6340;
module.exports.class = ServerSettingsMessage;