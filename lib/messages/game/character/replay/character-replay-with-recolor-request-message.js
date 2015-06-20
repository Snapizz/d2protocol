var d2com = require('d2com'),
  BaseMessage = require('./character-replay-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterReplayWithRecolorRequestMessage = function() {
  this.indexedColor = [];
};

util.inherits(CharacterReplayWithRecolorRequestMessage, BaseMessage);

CharacterReplayWithRecolorRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReplayWithRecolorRequestMessage(output);
};

CharacterReplayWithRecolorRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReplayWithRecolorRequestMessage(input);
};

CharacterReplayWithRecolorRequestMessage.prototype.serializeAs_CharacterReplayWithRecolorRequestMessage = function(output) {
  this.serializeAs_CharacterReplayRequestMessage(output);
  output.writeShort(this.indexedColor.length);
  var _i1 = 0;
  while (_i1 < this.indexedColor.length) {
    output.writeInt(this.indexedColor[_i1]);
    _i1++;
  };
};

CharacterReplayWithRecolorRequestMessage.prototype.deserializeAs_CharacterReplayWithRecolorRequestMessage = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _indexedColorLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _indexedColorLen) {
    _val1 = input.readInt();
    this.indexedColor.push(_val1);
    _i1++;
  };
};

CharacterReplayWithRecolorRequestMessage.prototype.getMessageId = function() {
  return 6111;
};

CharacterReplayWithRecolorRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayWithRecolorRequestMessage';
};

module.exports.id = 6111;
module.exports.class = CharacterReplayWithRecolorRequestMessage;