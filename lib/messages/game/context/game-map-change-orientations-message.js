var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameMapChangeOrientationsMessage = function() {
  this.orientations = [];
};

util.inherits(GameMapChangeOrientationsMessage, BaseMessage);

GameMapChangeOrientationsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapChangeOrientationsMessage(output);
};

GameMapChangeOrientationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapChangeOrientationsMessage(input);
};

GameMapChangeOrientationsMessage.prototype.serializeAs_GameMapChangeOrientationsMessage = function(output) {
  output.writeShort(this.orientations.length);
  var _i1 = 0;
  while (_i1 < this.orientations.length) {
    (this.orientations[_i1]).serializeAs_ActorOrientation(output);
    _i1++;
  };
};

GameMapChangeOrientationsMessage.prototype.deserializeAs_GameMapChangeOrientationsMessage = function(input) {
  var _item1;
  var _orientationsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _orientationsLen) {
    _item1 = new ActorOrientation();
    _item1.deserialize(input);
    this.orientations.push(_item1);
    _i1++;
  };
};

GameMapChangeOrientationsMessage.prototype.getMessageId = function() {
  return 6155;
};

GameMapChangeOrientationsMessage.prototype.getClassName = function() {
  return 'GameMapChangeOrientationsMessage';
};

module.exports.id = 6155;
module.exports.class = GameMapChangeOrientationsMessage;