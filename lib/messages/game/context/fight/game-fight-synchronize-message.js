var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightSynchronizeMessage = function() {
  this.fighters = [];
};

util.inherits(GameFightSynchronizeMessage, BaseMessage);

GameFightSynchronizeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightSynchronizeMessage(output);
};

GameFightSynchronizeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightSynchronizeMessage(input);
};

GameFightSynchronizeMessage.prototype.serializeAs_GameFightSynchronizeMessage = function(output) {
  output.writeShort(this.fighters.length);
  var _i1 = 0;
  while (_i1 < this.fighters.length) {
    output.writeShort((this.fighters[_i1]).getTypeId());
    (this.fighters[_i1]).serialize(output);
    _i1++;
  };
};

GameFightSynchronizeMessage.prototype.deserializeAs_GameFightSynchronizeMessage = function(input) {
  var _id1 = 0;
  var _item1;
  var _fightersLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _fightersLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(GameFightFighterInformations, _id1);
    _item1.deserialize(input);
    this.fighters.push(_item1);
    _i1++;
  };
};

GameFightSynchronizeMessage.prototype.getMessageId = function() {
  return 5921;
};

GameFightSynchronizeMessage.prototype.getClassName = function() {
  return 'GameFightSynchronizeMessage';
};

module.exports.id = 5921;
module.exports.class = GameFightSynchronizeMessage;