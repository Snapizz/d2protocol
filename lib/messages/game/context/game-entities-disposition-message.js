var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameEntitiesDispositionMessage = function() {
  this.dispositions = [];
};

util.inherits(GameEntitiesDispositionMessage, BaseMessage);

GameEntitiesDispositionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameEntitiesDispositionMessage(output);
};

GameEntitiesDispositionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameEntitiesDispositionMessage(input);
};

GameEntitiesDispositionMessage.prototype.serializeAs_GameEntitiesDispositionMessage = function(output) {
  output.writeShort(this.dispositions.length);
  var _i1;
  while (_i1 < this.dispositions.length) {
    (this.dispositions[_i1]).serializeAs_IdentifiedEntityDispositionInformations(output);
    _i1++;
  };
};

GameEntitiesDispositionMessage.prototype.deserializeAs_GameEntitiesDispositionMessage = function(input) {
  var _item1;
  var _dispositionsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _dispositionsLen) {
    _item1 = new IdentifiedEntityDispositionInformations();
    _item1.deserialize(input);
    this.dispositions.push(_item1);
    _i1++;
  };
};

GameEntitiesDispositionMessage.prototype.getMessageId = function() {
  return 5696;
};

GameEntitiesDispositionMessage.prototype.getClassName = function() {
  return 'GameEntitiesDispositionMessage';
};

module.exports.id = 5696;
module.exports.class = GameEntitiesDispositionMessage;