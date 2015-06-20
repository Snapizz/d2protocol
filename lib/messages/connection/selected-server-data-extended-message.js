var d2com = require('d2com'),
  BaseMessage = require('./selected-server-data-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SelectedServerDataExtendedMessage = function() {
  this.serverIds = [];
};

util.inherits(SelectedServerDataExtendedMessage, BaseMessage);

SelectedServerDataExtendedMessage.prototype.serialize = function(output) {
  this.serializeAs_SelectedServerDataExtendedMessage(output);
};

SelectedServerDataExtendedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SelectedServerDataExtendedMessage(input);
};

SelectedServerDataExtendedMessage.prototype.serializeAs_SelectedServerDataExtendedMessage = function(output) {
  this.serializeAs_SelectedServerDataMessage(output);
  output.writeShort(this.serverIds.length);
  var _i1 = 0;
  while (_i1 < this.serverIds.length) {
    if (this.serverIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.serverIds[_i1]) + ") on element 1 (starting at 1) of serverIds.")));
    };
    output.writeVarShort(this.serverIds[_i1]);
    _i1++;
  };
};

SelectedServerDataExtendedMessage.prototype.deserializeAs_SelectedServerDataExtendedMessage = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _serverIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _serverIdsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of serverIds.")));
    };
    this.serverIds.push(_val1);
    _i1++;
  };
};

SelectedServerDataExtendedMessage.prototype.getMessageId = function() {
  return 6469;
};

SelectedServerDataExtendedMessage.prototype.getClassName = function() {
  return 'SelectedServerDataExtendedMessage';
};

module.exports.id = 6469;
module.exports.class = SelectedServerDataExtendedMessage;