var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EntityTalkMessage = function() {
  this.entityId = 0;
  this.textId = 0;
  this.parameters = [];
};

util.inherits(EntityTalkMessage, BaseMessage);

EntityTalkMessage.prototype.serialize = function(output) {
  this.serializeAs_EntityTalkMessage(output);
};

EntityTalkMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EntityTalkMessage(input);
};

EntityTalkMessage.prototype.serializeAs_EntityTalkMessage = function(output) {
  output.writeInt(this.entityId);
  if (this.textId < 0) {
    throw (new Error((("Forbidden value (" + this.textId) + ") on element textId.")));
  };
  output.writeVarShort(this.textId);
  output.writeShort(this.parameters.length);
  var _i3 = 0;
  while (_i3 < this.parameters.length) {
    output.writeUTF(this.parameters[_i3]);
    _i3++;
  };
};

EntityTalkMessage.prototype.deserializeAs_EntityTalkMessage = function(input) {
  var _val3;
  this.entityId = input.readInt();
  this.textId = input.readVarUhShort();
  if (this.textId < 0) {
    throw (new Error((("Forbidden value (" + this.textId) + ") on element of EntityTalkMessage.textId.")));
  };
  var _parametersLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _parametersLen) {
    _val3 = input.readUTF();
    this.parameters.push(_val3);
    _i3++;
  };
};

EntityTalkMessage.prototype.getMessageId = function() {
  return 6110;
};

EntityTalkMessage.prototype.getClassName = function() {
  return 'EntityTalkMessage';
};

module.exports.id = 6110;
module.exports.class = EntityTalkMessage;