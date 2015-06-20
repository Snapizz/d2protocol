var d2com = require('d2com'),
  BaseMessage = require('./mail-status-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NewMailMessage = function() {
  this.sendersAccountId = [];
};

util.inherits(NewMailMessage, BaseMessage);

NewMailMessage.prototype.serialize = function(output) {
  this.serializeAs_NewMailMessage(output);
};

NewMailMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NewMailMessage(input);
};

NewMailMessage.prototype.serializeAs_NewMailMessage = function(output) {
  this.serializeAs_MailStatusMessage(output);
  output.writeShort(this.sendersAccountId.length);
  var _i1 = 0;
  while (_i1 < this.sendersAccountId.length) {
    if (this.sendersAccountId[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.sendersAccountId[_i1]) + ") on element 1 (starting at 1) of sendersAccountId.")));
    };
    output.writeInt(this.sendersAccountId[_i1]);
    _i1++;
  };
};

NewMailMessage.prototype.deserializeAs_NewMailMessage = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _sendersAccountIdLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _sendersAccountIdLen) {
    _val1 = input.readInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of sendersAccountId.")));
    };
    this.sendersAccountId.push(_val1);
    _i1++;
  };
};

NewMailMessage.prototype.getMessageId = function() {
  return 6292;
};

NewMailMessage.prototype.getClassName = function() {
  return 'NewMailMessage';
};

module.exports.id = 6292;
module.exports.class = NewMailMessage;