var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InteractiveMapUpdateMessage = function() {
  this.interactiveElements = [];
};

util.inherits(InteractiveMapUpdateMessage, BaseMessage);

InteractiveMapUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_InteractiveMapUpdateMessage(output);
};

InteractiveMapUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveMapUpdateMessage(input);
};

InteractiveMapUpdateMessage.prototype.serializeAs_InteractiveMapUpdateMessage = function(output) {
  output.writeShort(this.interactiveElements.length);
  var _i1;
  while (_i1 < this.interactiveElements.length) {
    output.writeShort((this.interactiveElements[_i1]).getTypeId());
    (this.interactiveElements[_i1]).serialize(output);
    _i1++;
  };
};

InteractiveMapUpdateMessage.prototype.deserializeAs_InteractiveMapUpdateMessage = function(input) {
  var _id1;
  var _item1;
  var _interactiveElementsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _interactiveElementsLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(InteractiveElement, _id1);
    _item1.deserialize(input);
    this.interactiveElements.push(_item1);
    _i1++;
  };
};

InteractiveMapUpdateMessage.prototype.getMessageId = function() {
  return 5002;
};

InteractiveMapUpdateMessage.prototype.getClassName = function() {
  return 'InteractiveMapUpdateMessage';
};

module.exports.id = 5002;
module.exports.class = InteractiveMapUpdateMessage;