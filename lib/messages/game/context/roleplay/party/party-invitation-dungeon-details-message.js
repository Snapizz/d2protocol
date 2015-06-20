var d2com = require('d2com'),
  BaseMessage = require('./party-invitation-dungeon-details-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

PartyInvitationDungeonDetailsMessage.prototype.serializeAs_PartyInvitationDungeonDetailsMessage = function(param1) {
  this.serializeAs_PartyInvitationDetailsMessage(param1);
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    param1.writeShort(this.playersDungeonReady.length);
    var _loc2_ = 0;
    while (_loc2_ < this.playersDungeonReady.length) {
      param1.writeBoolean(this.playersDungeonReady[_loc2_]);
      _loc2_++;
    }
    return;
  }
};

PartyInvitationDungeonDetailsMessage.prototype.deserializeAs_PartyInvitationDungeonDetailsMessage = function(param1) {
  var _loc4_ = false;
  this.deserialize(param1);
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonDetailsMessage.dungeonId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readBoolean();
      this.playersDungeonReady.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

PartyInvitationDungeonDetailsMessage.prototype.getMessageId = function() {
  return 6262;
};

PartyInvitationDungeonDetailsMessage.prototype.getClassName = function() {
  return 'PartyInvitationDungeonDetailsMessage';
};

module.exports.id = 6262;
module.exports.class = PartyInvitationDungeonDetailsMessage;
module.exports.getInstance = function() {
  return new PartyInvitationDungeonDetailsMessage();
};