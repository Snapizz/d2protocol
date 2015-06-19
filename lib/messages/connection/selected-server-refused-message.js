var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SelectedServerRefusedMessage = function() {
  this.serverId = 0;
  this.error = 1;
  this.serverStatus = 1;
};

util.inherits(SelectedServerRefusedMessage, BaseMessage);

SelectedServerRefusedMessage.prototype.serialize = function(output) {
  this.serializeAs_SelectedServerRefusedMessage(output);
};

SelectedServerRefusedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SelectedServerRefusedMessage(input);
};

SelectedServerRefusedMessage.prototype.serializeAs_SelectedServerRefusedMessage = function(output) {
  if (this.serverId < 0) {
    throw (new Error((("Forbidden value (" + this.serverId) + ") on element serverId.")));
  };
  output.writeVarShort(this.serverId);
  output.writeByte(this.error);
  output.writeByte(this.serverStatus);
};

SelectedServerRefusedMessage.prototype.deserializeAs_SelectedServerRefusedMessage = function(input) {
  this.serverId = input.readVarUhShort();
  if (this.serverId < 0) {
    throw (new Error((("Forbidden value (" + this.serverId) + ") on element of SelectedServerRefusedMessage.serverId.")));
  };
  this.error = input.readByte();
  if (this.error < 0) {
    throw (new Error((("Forbidden value (" + this.error) + ") on element of SelectedServerRefusedMessage.error.")));
  };
  this.serverStatus = input.readByte();
  if (this.serverStatus < 0) {
    throw (new Error((("Forbidden value (" + this.serverStatus) + ") on element of SelectedServerRefusedMessage.serverStatus.")));
  };
};

SelectedServerRefusedMessage.prototype.getMessageId = function() {
  return 41;
};

SelectedServerRefusedMessage.prototype.getClassName = function() {
  return 'SelectedServerRefusedMessage';
};

module.exports.id = 41;
module.exports.class = SelectedServerRefusedMessage;