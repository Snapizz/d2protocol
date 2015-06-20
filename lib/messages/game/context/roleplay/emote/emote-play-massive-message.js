var d2com = require('d2com'),
  BaseMessage = require('./emote-play-abstract-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmotePlayMassiveMessage = function() {
  this.actorIds = [];
};

util.inherits(EmotePlayMassiveMessage, BaseMessage);

EmotePlayMassiveMessage.prototype.serialize = function(output) {
  this.serializeAs_EmotePlayMassiveMessage(output);
};

EmotePlayMassiveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmotePlayMassiveMessage(input);
};

EmotePlayMassiveMessage.prototype.serializeAs_EmotePlayMassiveMessage = function(output) {
  this.serializeAs_EmotePlayAbstractMessage(output);
  output.writeShort(this.actorIds.length);
  var _i1 = 0;
  while (_i1 < this.actorIds.length) {
    output.writeInt(this.actorIds[_i1]);
    _i1++;
  };
};

EmotePlayMassiveMessage.prototype.deserializeAs_EmotePlayMassiveMessage = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _actorIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _actorIdsLen) {
    _val1 = input.readInt();
    this.actorIds.push(_val1);
    _i1++;
  };
};

EmotePlayMassiveMessage.prototype.getMessageId = function() {
  return 5691;
};

EmotePlayMassiveMessage.prototype.getClassName = function() {
  return 'EmotePlayMassiveMessage';
};

module.exports.id = 5691;
module.exports.class = EmotePlayMassiveMessage;