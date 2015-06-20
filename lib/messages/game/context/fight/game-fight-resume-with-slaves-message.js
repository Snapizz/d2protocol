var d2com = require('d2com'),
  BaseMessage = require('./game-fight-resume-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightResumeWithSlavesMessage = function() {
  this.slavesInfo = [];
};

util.inherits(GameFightResumeWithSlavesMessage, BaseMessage);

GameFightResumeWithSlavesMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightResumeWithSlavesMessage(output);
};

GameFightResumeWithSlavesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightResumeWithSlavesMessage(input);
};

GameFightResumeWithSlavesMessage.prototype.serializeAs_GameFightResumeWithSlavesMessage = function(output) {
  this.serializeAs_GameFightResumeMessage(output);
  output.writeShort(this.slavesInfo.length);
  var _i1 = 0;
  while (_i1 < this.slavesInfo.length) {
    (this.slavesInfo[_i1]).serializeAs_GameFightResumeSlaveInfo(output);
    _i1++;
  };
};

GameFightResumeWithSlavesMessage.prototype.deserializeAs_GameFightResumeWithSlavesMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _slavesInfoLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _slavesInfoLen) {
    _item1 = new GameFightResumeSlaveInfo();
    _item1.deserialize(input);
    this.slavesInfo.push(_item1);
    _i1++;
  };
};

GameFightResumeWithSlavesMessage.prototype.getMessageId = function() {
  return 6215;
};

GameFightResumeWithSlavesMessage.prototype.getClassName = function() {
  return 'GameFightResumeWithSlavesMessage';
};

module.exports.id = 6215;
module.exports.class = GameFightResumeWithSlavesMessage;