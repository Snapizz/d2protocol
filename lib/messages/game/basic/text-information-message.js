var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TextInformationMessage = function() {
  this.msgType = 0;
  this.msgId = 0;
  this.parameters = [];
};

util.inherits(TextInformationMessage, BaseMessage);

TextInformationMessage.prototype.serialize = function(output) {
  this.serializeAs_TextInformationMessage(output);
};

TextInformationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TextInformationMessage(input);
};

TextInformationMessage.prototype.serializeAs_TextInformationMessage = function(output) {
  output.writeByte(this.msgType);
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element msgId.")));
  };
  output.writeVarShort(this.msgId);
  output.writeShort(this.parameters.length);
  var _i3 = 0;
  while (_i3 < this.parameters.length) {
    output.writeUTF(this.parameters[_i3]);
    _i3++;
  };
};

TextInformationMessage.prototype.deserializeAs_TextInformationMessage = function(input) {
  var _val3;
  this.msgType = input.readByte();
  if (this.msgType < 0) {
    throw (new Error((("Forbidden value (" + this.msgType) + ") on element of TextInformationMessage.msgType.")));
  };
  this.msgId = input.readVarUhShort();
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element of TextInformationMessage.msgId.")));
  };
  var _parametersLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _parametersLen) {
    _val3 = input.readUTF();
    this.parameters.push(_val3);
    _i3++;
  };
};

TextInformationMessage.prototype.getMessageId = function() {
  return 780;
};

TextInformationMessage.prototype.getClassName = function() {
  return 'TextInformationMessage';
};

module.exports.id = 780;
module.exports.class = TextInformationMessage;