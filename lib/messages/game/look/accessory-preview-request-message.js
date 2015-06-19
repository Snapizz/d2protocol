var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AccessoryPreviewRequestMessage = function() {
  this.genericId = [];
};

util.inherits(AccessoryPreviewRequestMessage, BaseMessage);

AccessoryPreviewRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AccessoryPreviewRequestMessage(output);
};

AccessoryPreviewRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccessoryPreviewRequestMessage(input);
};

AccessoryPreviewRequestMessage.prototype.serializeAs_AccessoryPreviewRequestMessage = function(output) {
  output.writeShort(this.genericId.length);
  var _i1;
  while (_i1 < this.genericId.length) {
    if (this.genericId[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.genericId[_i1]) + ") on element 1 (starting at 1) of genericId.")));
    };
    output.writeVarShort(this.genericId[_i1]);
    _i1++;
  };
};

AccessoryPreviewRequestMessage.prototype.deserializeAs_AccessoryPreviewRequestMessage = function(input) {
  var _val1;
  var _genericIdLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _genericIdLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of genericId.")));
    };
    this.genericId.push(_val1);
    _i1++;
  };
};

AccessoryPreviewRequestMessage.prototype.getMessageId = function() {
  return 6518;
};

AccessoryPreviewRequestMessage.prototype.getClassName = function() {
  return 'AccessoryPreviewRequestMessage';
};

module.exports.id = 6518;
module.exports.class = AccessoryPreviewRequestMessage;