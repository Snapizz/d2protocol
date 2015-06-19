var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameDataPaddockObjectListAddMessage = function() {
  this.paddockItemDescription = [];
};

util.inherits(GameDataPaddockObjectListAddMessage, BaseMessage);

GameDataPaddockObjectListAddMessage.prototype.serialize = function(output) {
  this.serializeAs_GameDataPaddockObjectListAddMessage(output);
};

GameDataPaddockObjectListAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameDataPaddockObjectListAddMessage(input);
};

GameDataPaddockObjectListAddMessage.prototype.serializeAs_GameDataPaddockObjectListAddMessage = function(output) {
  output.writeShort(this.paddockItemDescription.length);
  var _i1;
  while (_i1 < this.paddockItemDescription.length) {
    (this.paddockItemDescription[_i1]).serializeAs_PaddockItem(output);
    _i1++;
  };
};

GameDataPaddockObjectListAddMessage.prototype.deserializeAs_GameDataPaddockObjectListAddMessage = function(input) {
  var _item1;
  var _paddockItemDescriptionLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _paddockItemDescriptionLen) {
    _item1 = new PaddockItem();
    _item1.deserialize(input);
    this.paddockItemDescription.push(_item1);
    _i1++;
  };
};

GameDataPaddockObjectListAddMessage.prototype.getMessageId = function() {
  return 5992;
};

GameDataPaddockObjectListAddMessage.prototype.getClassName = function() {
  return 'GameDataPaddockObjectListAddMessage';
};

module.exports.id = 5992;
module.exports.class = GameDataPaddockObjectListAddMessage;