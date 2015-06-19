var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NotificationListMessage = function() {
  this.flags = [];
};

util.inherits(NotificationListMessage, BaseMessage);

NotificationListMessage.prototype.serialize = function(output) {
  this.serializeAs_NotificationListMessage(output);
};

NotificationListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NotificationListMessage(input);
};

NotificationListMessage.prototype.serializeAs_NotificationListMessage = function(output) {
  output.writeShort(this.flags.length);
  var _i1;
  while (_i1 < this.flags.length) {
    output.writeVarInt(this.flags[_i1]);
    _i1++;
  };
};

NotificationListMessage.prototype.deserializeAs_NotificationListMessage = function(input) {
  var _val1;
  var _flagsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _flagsLen) {
    _val1 = input.readVarInt();
    this.flags.push(_val1);
    _i1++;
  };
};

NotificationListMessage.prototype.getMessageId = function() {
  return 6087;
};

NotificationListMessage.prototype.getClassName = function() {
  return 'NotificationListMessage';
};

module.exports.id = 6087;
module.exports.class = NotificationListMessage;