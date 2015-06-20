var d2com = require('d2com'),
  BaseMessage = require('./teleport-buddies-requested-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TeleportBuddiesRequestedMessage = function() {
  this.dungeonId = 0;
  this.inviterId = 0;
  this.invalidBuddiesIds = [];
};

util.inherits(TeleportBuddiesRequestedMessage, BaseMessage);

TeleportBuddiesRequestedMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportBuddiesRequestedMessage(output);
};

TeleportBuddiesRequestedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportBuddiesRequestedMessage(input);
};

TeleportBuddiesRequestedMessage.prototype.serializeAs_TeleportBuddiesRequestedMessage = function(param1) {
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    if (this.inviterId < 0) {
      throw new Error("Forbidden value (" + this.inviterId + ") on element inviterId.");
    } else {
      param1.writeVarInt(this.inviterId);
      param1.writeShort(this.invalidBuddiesIds.length);
      var _loc2_ = 0;
      while (_loc2_ < this.invalidBuddiesIds.length) {
        if (this.invalidBuddiesIds[_loc2_] < 0) {
          throw new Error("Forbidden value (" + this.invalidBuddiesIds[_loc2_] + ") on element 3 (starting at 1) of invalidBuddiesIds.");
        } else {
          param1.writeVarInt(this.invalidBuddiesIds[_loc2_]);
          _loc2_++;
          continue;
        }
      }
      return;
    }
  }
};

TeleportBuddiesRequestedMessage.prototype.deserializeAs_TeleportBuddiesRequestedMessage = function(param1) {
  var _loc4_ = 0;
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportBuddiesRequestedMessage.dungeonId.");
  } else {
    this.inviterId = param1.readVarUhInt();
    if (this.inviterId < 0) {
      throw new Error("Forbidden value (" + this.inviterId + ") on element of TeleportBuddiesRequestedMessage.inviterId.");
    } else {
      var _loc2_ = param1.readUnsignedShort();
      var _loc3_ = 0;
      while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
        if (_loc4_ < 0) {
          throw new Error("Forbidden value (" + _loc4_ + ") on elements of invalidBuddiesIds.");
        } else {
          this.invalidBuddiesIds.push(_loc4_);
          _loc3_++;
          continue;
        }
      }
      return;
    }
  }
};

TeleportBuddiesRequestedMessage.prototype.getMessageId = function() {
  return 6302;
};

TeleportBuddiesRequestedMessage.prototype.getClassName = function() {
  return 'TeleportBuddiesRequestedMessage';
};

module.exports.id = 6302;
module.exports.class = TeleportBuddiesRequestedMessage;
module.exports.getInstance = function() {
  return new TeleportBuddiesRequestedMessage();
};