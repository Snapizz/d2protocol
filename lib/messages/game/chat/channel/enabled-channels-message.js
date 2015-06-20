var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EnabledChannelsMessage = function() {
  this.channels = [];
  this.disallowed = [];
};

util.inherits(EnabledChannelsMessage, BaseMessage);

EnabledChannelsMessage.prototype.serialize = function(output) {
  this.serializeAs_EnabledChannelsMessage(output);
};

EnabledChannelsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EnabledChannelsMessage(input);
};

EnabledChannelsMessage.prototype.serializeAs_EnabledChannelsMessage = function(output) {
  output.writeShort(this.channels.length);
  var _i1 = 0;
  while (_i1 < this.channels.length) {
    output.writeByte(this.channels[_i1]);
    _i1++;
  };
  output.writeShort(this.disallowed.length);
  var _i2 = 0;
  while (_i2 < this.disallowed.length) {
    output.writeByte(this.disallowed[_i2]);
    _i2++;
  };
};

EnabledChannelsMessage.prototype.deserializeAs_EnabledChannelsMessage = function(input) {
  var _val1 = 0;
  var _val2 = 0;
  var _channelsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _channelsLen) {
    _val1 = input.readByte();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of channels.")));
    };
    this.channels.push(_val1);
    _i1++;
  };
  var _disallowedLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _disallowedLen) {
    _val2 = input.readByte();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of disallowed.")));
    };
    this.disallowed.push(_val2);
    _i2++;
  };
};

EnabledChannelsMessage.prototype.getMessageId = function() {
  return 892;
};

EnabledChannelsMessage.prototype.getClassName = function() {
  return 'EnabledChannelsMessage';
};

module.exports.id = 892;
module.exports.class = EnabledChannelsMessage;