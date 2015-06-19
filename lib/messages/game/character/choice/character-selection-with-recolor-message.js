var d2com = require('d2com'),
  BaseMessage = require('./character-selection-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectionWithRecolorMessage = function() {
  this.indexedColor = [];
};

util.inherits(CharacterSelectionWithRecolorMessage, BaseMessage);

CharacterSelectionWithRecolorMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectionWithRecolorMessage(output);
};

CharacterSelectionWithRecolorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectionWithRecolorMessage(input);
};

CharacterSelectionWithRecolorMessage.prototype.serializeAs_CharacterSelectionWithRecolorMessage = function(output) {
  this.serializeAs_CharacterSelectionMessage(output);
  output.writeShort(this.indexedColor.length);
  var _i1;
  while (_i1 < this.indexedColor.length) {
    output.writeInt(this.indexedColor[_i1]);
    _i1++;
  };
};

CharacterSelectionWithRecolorMessage.prototype.deserializeAs_CharacterSelectionWithRecolorMessage = function(input) {
  var _val1;
  this.deserialize(input);
  var _indexedColorLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _indexedColorLen) {
    _val1 = input.readInt();
    this.indexedColor.push(_val1);
    _i1++;
  };
};

CharacterSelectionWithRecolorMessage.prototype.getMessageId = function() {
  return 6075;
};

CharacterSelectionWithRecolorMessage.prototype.getClassName = function() {
  return 'CharacterSelectionWithRecolorMessage';
};

module.exports.id = 6075;
module.exports.class = CharacterSelectionWithRecolorMessage;