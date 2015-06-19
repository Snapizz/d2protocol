var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmoteListMessage = function() {
  this.emoteIds = [];
};

util.inherits(EmoteListMessage, BaseMessage);

EmoteListMessage.prototype.serialize = function(output) {
  this.serializeAs_EmoteListMessage(output);
};

EmoteListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmoteListMessage(input);
};

EmoteListMessage.prototype.serializeAs_EmoteListMessage = function(output) {
  output.writeShort(this.emoteIds.length);
  var _i1;
  while (_i1 < this.emoteIds.length) {
    if ((((this.emoteIds[_i1] < 0)) || ((this.emoteIds[_i1] > 0xFF)))) {
      throw (new Error((("Forbidden value (" + this.emoteIds[_i1]) + ") on element 1 (starting at 1) of emoteIds.")));
    };
    output.writeByte(this.emoteIds[_i1]);
    _i1++;
  };
};

EmoteListMessage.prototype.deserializeAs_EmoteListMessage = function(input) {
  var _val1;
  var _emoteIdsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _emoteIdsLen) {
    _val1 = input.readUnsignedByte();
    if ((((_val1 < 0)) || ((_val1 > 0xFF)))) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of emoteIds.")));
    };
    this.emoteIds.push(_val1);
    _i1++;
  };
};

EmoteListMessage.prototype.getMessageId = function() {
  return 5689;
};

EmoteListMessage.prototype.getClassName = function() {
  return 'EmoteListMessage';
};

module.exports.id = 5689;
module.exports.class = EmoteListMessage;