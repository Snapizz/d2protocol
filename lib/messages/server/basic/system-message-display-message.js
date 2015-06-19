var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SystemMessageDisplayMessage = function() {
  this.hangUp = false;
  this.msgId = 0;
  this.parameters = [];
};

util.inherits(SystemMessageDisplayMessage, BaseMessage);

SystemMessageDisplayMessage.prototype.serialize = function(output) {
  this.serializeAs_SystemMessageDisplayMessage(output);
};

SystemMessageDisplayMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SystemMessageDisplayMessage(input);
};

SystemMessageDisplayMessage.prototype.serializeAs_SystemMessageDisplayMessage = function(output) {
  output.writeBoolean(this.hangUp);
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element msgId.")));
  };
  output.writeVarShort(this.msgId);
  output.writeShort(this.parameters.length);
  var _i3;
  while (_i3 < this.parameters.length) {
    output.writeUTF(this.parameters[_i3]);
    _i3++;
  };
};

SystemMessageDisplayMessage.prototype.deserializeAs_SystemMessageDisplayMessage = function(input) {
  var _val3;
  this.hangUp = input.readBoolean();
  this.msgId = input.readVarUhShort();
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element of SystemMessageDisplayMessage.msgId.")));
  };
  var _parametersLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _parametersLen) {
    _val3 = input.readUTF();
    this.parameters.push(_val3);
    _i3++;
  };
};

SystemMessageDisplayMessage.prototype.getMessageId = function() {
  return 189;
};

SystemMessageDisplayMessage.prototype.getClassName = function() {
  return 'SystemMessageDisplayMessage';
};

module.exports.id = 189;
module.exports.class = SystemMessageDisplayMessage;