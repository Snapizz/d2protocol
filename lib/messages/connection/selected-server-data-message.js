var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

SelectedServerDataMessage.prototype.serializeAs_SelectedServerDataMessage = function(param1) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.ssl);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canCreateNewCharacter);
  param1.writeByte(_loc2_);
  if (this.serverId < 0) {
    throw new Error("Forbidden value (" + this.serverId + ") on element serverId.");
  } else {
    param1.writeVarShort(this.serverId);
    param1.writeUTF(this.address);
    if (this.port < 0 || this.port > 65535) {
      throw new Error("Forbidden value (" + this.port + ") on element port.");
    } else {
      param1.writeShort(this.port);
      param1.writeUTF(this.ticket);
      return;
    }
  }
};

SelectedServerDataMessage.prototype.deserializeAs_SelectedServerDataMessage = function(param1) {
  var _loc2_ = param1.readByte();
  this.ssl = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.canCreateNewCharacter = BooleanByteWrapper.getFlag(_loc2_, 1);
  this.serverId = param1.readVarUhShort();
  if (this.serverId < 0) {
    throw new Error("Forbidden value (" + this.serverId + ") on element of SelectedServerDataMessage.serverId.");
  } else {
    this.address = param1.readUTF();
    this.port = param1.readUnsignedShort();
    if (this.port < 0 || this.port > 65535) {
      throw new Error("Forbidden value (" + this.port + ") on element of SelectedServerDataMessage.port.");
    } else {
      this.ticket = param1.readUTF();
      return;
    }
  }
};

SelectedServerDataMessage.prototype.getMessageId = function() {
  return 42;
};

SelectedServerDataMessage.prototype.getClassName = function() {
  return 'SelectedServerDataMessage';
};

module.exports.id = 42;
module.exports.class = SelectedServerDataMessage;
module.exports.getInstance = function() {
  return new SelectedServerDataMessage();
};