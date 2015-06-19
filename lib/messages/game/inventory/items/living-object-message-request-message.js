var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LivingObjectMessageRequestMessage = function() {
  this.msgId = 0;
  this.parameters = [];
  this.livingObject = 0;
};

util.inherits(LivingObjectMessageRequestMessage, BaseMessage);

LivingObjectMessageRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_LivingObjectMessageRequestMessage(output);
};

LivingObjectMessageRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LivingObjectMessageRequestMessage(input);
};

LivingObjectMessageRequestMessage.prototype.serializeAs_LivingObjectMessageRequestMessage = function(output) {
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element msgId.")));
  };
  output.writeVarShort(this.msgId);
  output.writeShort(this.parameters.length);
  var _i2;
  while (_i2 < this.parameters.length) {
    output.writeUTF(this.parameters[_i2]);
    _i2++;
  };
  if (this.livingObject < 0) {
    throw (new Error((("Forbidden value (" + this.livingObject) + ") on element livingObject.")));
  };
  output.writeVarInt(this.livingObject);
};

LivingObjectMessageRequestMessage.prototype.deserializeAs_LivingObjectMessageRequestMessage = function(input) {
  var _val2;
  this.msgId = input.readVarUhShort();
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element of LivingObjectMessageRequestMessage.msgId.")));
  };
  var _parametersLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _parametersLen) {
    _val2 = input.readUTF();
    this.parameters.push(_val2);
    _i2++;
  };
  this.livingObject = input.readVarUhInt();
  if (this.livingObject < 0) {
    throw (new Error((("Forbidden value (" + this.livingObject) + ") on element of LivingObjectMessageRequestMessage.livingObject.")));
  };
};

LivingObjectMessageRequestMessage.prototype.getMessageId = function() {
  return 6066;
};

LivingObjectMessageRequestMessage.prototype.getClassName = function() {
  return 'LivingObjectMessageRequestMessage';
};

module.exports.id = 6066;
module.exports.class = LivingObjectMessageRequestMessage;