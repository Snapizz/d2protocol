var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightSpectateMessage = function() {
  this.effects = [];
  this.marks = [];
  this.gameTurn = 0;
  this.fightStart = 0;
};

util.inherits(GameFightSpectateMessage, BaseMessage);

GameFightSpectateMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightSpectateMessage(output);
};

GameFightSpectateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightSpectateMessage(input);
};

GameFightSpectateMessage.prototype.serializeAs_GameFightSpectateMessage = function(output) {
  output.writeShort(this.effects.length);
  var _i1 = 0;
  while (_i1 < this.effects.length) {
    (this.effects[_i1]).serializeAs_FightDispellableEffectExtendedInformations(output);
    _i1++;
  };
  output.writeShort(this.marks.length);
  var _i2 = 0;
  while (_i2 < this.marks.length) {
    (this.marks[_i2]).serializeAs_GameActionMark(output);
    _i2++;
  };
  if (this.gameTurn < 0) {
    throw (new Error((("Forbidden value (" + this.gameTurn) + ") on element gameTurn.")));
  };
  output.writeVarShort(this.gameTurn);
  if (this.fightStart < 0) {
    throw (new Error((("Forbidden value (" + this.fightStart) + ") on element fightStart.")));
  };
  output.writeInt(this.fightStart);
};

GameFightSpectateMessage.prototype.deserializeAs_GameFightSpectateMessage = function(input) {
  var _item1;
  var _item2;
  var _effectsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _effectsLen) {
    _item1 = new FightDispellableEffectExtendedInformations();
    _item1.deserialize(input);
    this.effects.push(_item1);
    _i1++;
  };
  var _marksLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _marksLen) {
    _item2 = new GameActionMark();
    _item2.deserialize(input);
    this.marks.push(_item2);
    _i2++;
  };
  this.gameTurn = input.readVarUhShort();
  if (this.gameTurn < 0) {
    throw (new Error((("Forbidden value (" + this.gameTurn) + ") on element of GameFightSpectateMessage.gameTurn.")));
  };
  this.fightStart = input.readInt();
  if (this.fightStart < 0) {
    throw (new Error((("Forbidden value (" + this.fightStart) + ") on element of GameFightSpectateMessage.fightStart.")));
  };
};

GameFightSpectateMessage.prototype.getMessageId = function() {
  return 6069;
};

GameFightSpectateMessage.prototype.getClassName = function() {
  return 'GameFightSpectateMessage';
};

module.exports.id = 6069;
module.exports.class = GameFightSpectateMessage;