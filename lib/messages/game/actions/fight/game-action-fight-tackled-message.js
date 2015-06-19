var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightTackledMessage = function() {
  this.tacklersIds = [];
};

util.inherits(GameActionFightTackledMessage, BaseMessage);

GameActionFightTackledMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightTackledMessage(output);
};

GameActionFightTackledMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightTackledMessage(input);
};

GameActionFightTackledMessage.prototype.serializeAs_GameActionFightTackledMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.tacklersIds.length);
  var _i1;
  while (_i1 < this.tacklersIds.length) {
    output.writeInt(this.tacklersIds[_i1]);
    _i1++;
  };
};

GameActionFightTackledMessage.prototype.deserializeAs_GameActionFightTackledMessage = function(input) {
  var _val1;
  this.deserialize(input);
  var _tacklersIdsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _tacklersIdsLen) {
    _val1 = input.readInt();
    this.tacklersIds.push(_val1);
    _i1++;
  };
};

GameActionFightTackledMessage.prototype.getMessageId = function() {
  return 1004;
};

GameActionFightTackledMessage.prototype.getClassName = function() {
  return 'GameActionFightTackledMessage';
};

module.exports.id = 1004;
module.exports.class = GameActionFightTackledMessage;