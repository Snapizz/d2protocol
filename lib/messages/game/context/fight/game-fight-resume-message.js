var d2com = require('d2com'),
  BaseMessage = require('./game-fight-spectate-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightResumeMessage = function() {
  this.spellCooldowns = [];
  this.summonCount = 0;
  this.bombCount = 0;
};

util.inherits(GameFightResumeMessage, BaseMessage);

GameFightResumeMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightResumeMessage(output);
};

GameFightResumeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightResumeMessage(input);
};

GameFightResumeMessage.prototype.serializeAs_GameFightResumeMessage = function(output) {
  this.serializeAs_GameFightSpectateMessage(output);
  output.writeShort(this.spellCooldowns.length);
  var _i1;
  while (_i1 < this.spellCooldowns.length) {
    (this.spellCooldowns[_i1]).serializeAs_GameFightSpellCooldown(output);
    _i1++;
  };
  if (this.summonCount < 0) {
    throw (new Error((("Forbidden value (" + this.summonCount) + ") on element summonCount.")));
  };
  output.writeByte(this.summonCount);
  if (this.bombCount < 0) {
    throw (new Error((("Forbidden value (" + this.bombCount) + ") on element bombCount.")));
  };
  output.writeByte(this.bombCount);
};

GameFightResumeMessage.prototype.deserializeAs_GameFightResumeMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _spellCooldownsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _spellCooldownsLen) {
    _item1 = new GameFightSpellCooldown();
    _item1.deserialize(input);
    this.spellCooldowns.push(_item1);
    _i1++;
  };
  this.summonCount = input.readByte();
  if (this.summonCount < 0) {
    throw (new Error((("Forbidden value (" + this.summonCount) + ") on element of GameFightResumeMessage.summonCount.")));
  };
  this.bombCount = input.readByte();
  if (this.bombCount < 0) {
    throw (new Error((("Forbidden value (" + this.bombCount) + ") on element of GameFightResumeMessage.bombCount.")));
  };
};

GameFightResumeMessage.prototype.getMessageId = function() {
  return 6067;
};

GameFightResumeMessage.prototype.getClassName = function() {
  return 'GameFightResumeMessage';
};

module.exports.id = 6067;
module.exports.class = GameFightResumeMessage;