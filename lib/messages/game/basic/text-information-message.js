var d2com = require('d2com'),
  BaseMessage = require('./text-information-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

TextInformationMessage.prototype.serializeAs_TextInformationMessage = function(param1) {
  param1.writeByte(this.msgType);
  if (this.msgId < 0) {
    throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
  } else {
    param1.writeVarShort(this.msgId);
    param1.writeShort(this.parameters.length);
    var _loc2_ = 0;
    while (_loc2_ < this.parameters.length) {
      param1.writeUTF(this.parameters[_loc2_]);
      _loc2_++;
    }
    return;
  }
};

TextInformationMessage.prototype.deserializeAs_TextInformationMessage = function(param1) {
  var _loc4_ = null;
  this.msgType = param1.readByte();
  if (this.msgType < 0) {
    throw new Error("Forbidden value (" + this.msgType + ") on element of TextInformationMessage.msgType.");
  } else {
    this.msgId = param1.readVarUhShort();
    if (this.msgId < 0) {
      throw new Error("Forbidden value (" + this.msgId + ") on element of TextInformationMessage.msgId.");
    } else {
      var _loc2_ = param1.readUnsignedShort();
      var _loc3_ = 0;
      while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUTF();
        this.parameters.push(_loc4_);
        _loc3_++;
      }
      return;
    }
  }
};

TextInformationMessage.prototype.getMessageId = function() {
  return 780;
};

TextInformationMessage.prototype.getClassName = function() {
  return 'TextInformationMessage';
};

module.exports.id = 780;
module.exports.class = TextInformationMessage;
module.exports.getInstance = function() {
  return new TextInformationMessage();
};