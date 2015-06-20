var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SelectedServerDataMessage = function() {
  this.serverId = 0;
  this.address = "";
  this.port = 0;
  this.ssl = false;
  this.canCreateNewCharacter = false;
  this.ticket = "";
};

util.inherits(SelectedServerDataMessage, BaseMessage);

SelectedServerDataMessage.prototype.serialize = function(output) {
  this.serializeAs_SelectedServerDataMessage(output);
};

SelectedServerDataMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SelectedServerDataMessage(input);
};

SelectedServerDataMessage.prototype.serializeAs_SelectedServerDataMessage = function(output) {
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.ssl);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.canCreateNewCharacter);
  output.writeByte(_box0);
  if (this.serverId < 0) {
    throw (new Error((("Forbidden value (" + this.serverId) + ") on element serverId.")));
  };
  output.writeVarShort(this.serverId);
  output.writeUTF(this.address);
  if ((((this.port < 0)) || ((this.port > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.port) + ") on element port.")));
  };
  output.writeShort(this.port);
  output.writeUTF(this.ticket);
};

SelectedServerDataMessage.prototype.deserializeAs_SelectedServerDataMessage = function(input) {
  var _box0 = input.readByte();
  this.ssl = BooleanByteWrapper.getFlag(_box0, 0);
  this.canCreateNewCharacter = BooleanByteWrapper.getFlag(_box0, 1);
  this.serverId = input.readVarUhShort();
  if (this.serverId < 0) {
    throw (new Error((("Forbidden value (" + this.serverId) + ") on element of SelectedServerDataMessage.serverId.")));
  };
  this.address = input.readUTF();
  this.port = input.readUnsignedShort();
  if ((((this.port < 0)) || ((this.port > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.port) + ") on element of SelectedServerDataMessage.port.")));
  };
  this.ticket = input.readUTF();
};

SelectedServerDataMessage.prototype.getMessageId = function() {
  return 42;
};

SelectedServerDataMessage.prototype.getClassName = function() {
  return 'SelectedServerDataMessage';
};

module.exports.id = 42;
module.exports.class = SelectedServerDataMessage;