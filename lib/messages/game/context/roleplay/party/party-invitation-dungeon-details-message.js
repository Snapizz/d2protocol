var d2com = require('d2com'),
  BaseMessage = require('./party-invitation-details-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationDungeonDetailsMessage = function() {
  this.dungeonId = 0;
  this.playersDungeonReady = [];
};

util.inherits(PartyInvitationDungeonDetailsMessage, BaseMessage);

PartyInvitationDungeonDetailsMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationDungeonDetailsMessage(output);
};

PartyInvitationDungeonDetailsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationDungeonDetailsMessage(input);
};

PartyInvitationDungeonDetailsMessage.prototype.serializeAs_PartyInvitationDungeonDetailsMessage = function(output) {
  this.serializeAs_PartyInvitationDetailsMessage(output);
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  output.writeShort(this.playersDungeonReady.length);
  var _i2;
  while (_i2 < this.playersDungeonReady.length) {
    output.writeBoolean(this.playersDungeonReady[_i2]);
    _i2++;
  };
};

PartyInvitationDungeonDetailsMessage.prototype.deserializeAs_PartyInvitationDungeonDetailsMessage = function(input) {
  var _val2;
  this.deserialize(input);
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of PartyInvitationDungeonDetailsMessage.dungeonId.")));
  };
  var _playersDungeonReadyLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _playersDungeonReadyLen) {
    _val2 = input.readBoolean();
    this.playersDungeonReady.push(_val2);
    _i2++;
  };
};

PartyInvitationDungeonDetailsMessage.prototype.getMessageId = function() {
  return 6262;
};

PartyInvitationDungeonDetailsMessage.prototype.getClassName = function() {
  return 'PartyInvitationDungeonDetailsMessage';
};

module.exports.id = 6262;
module.exports.class = PartyInvitationDungeonDetailsMessage;