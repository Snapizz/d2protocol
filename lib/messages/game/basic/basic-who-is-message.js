var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var BasicWhoIsMessage = function() {
  this.self = false;
  this.position = -1;
  this.accountNickname = "";
  this.accountId = 0;
  this.playerName = "";
  this.playerId = 0;
  this.areaId = 0;
  this.socialGroups = [];
  this.verbose = false;
  this.playerState = 99;
};

util.inherits(BasicWhoIsMessage, BaseMessage);

BasicWhoIsMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicWhoIsMessage(output);
};

BasicWhoIsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicWhoIsMessage(input);
};

BasicWhoIsMessage.prototype.serializeAs_BasicWhoIsMessage = function(param1) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.self);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.verbose);
  param1.writeByte(_loc2_);
  param1.writeByte(this.position);
  param1.writeUTF(this.accountNickname);
  if (this.accountId < 0) {
    throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
  } else {
    param1.writeInt(this.accountId);
    param1.writeUTF(this.playerName);
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
      param1.writeVarInt(this.playerId);
      param1.writeShort(this.areaId);
      param1.writeShort(this.socialGroups.length);
      var _loc3_ = 0;
      while (_loc3_ < this.socialGroups.length) {
        param1.writeShort((this.socialGroups[_loc3_]).getTypeId());
        (this.socialGroups[_loc3_]).serialize(param1);
        _loc3_++;
      }
      param1.writeByte(this.playerState);
      return;
    }
  }
};

BasicWhoIsMessage.prototype.deserializeAs_BasicWhoIsMessage = function(param1) {
  var _loc5_ = 0;
  var _loc6_ = null;
  var _loc2_ = param1.readByte();
  this.self = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.verbose = BooleanByteWrapper.getFlag(_loc2_, 1);
  this.position = param1.readByte();
  this.accountNickname = param1.readUTF();
  this.accountId = param1.readInt();
  if (this.accountId < 0) {
    throw new Error("Forbidden value (" + this.accountId + ") on element of BasicWhoIsMessage.accountId.");
  } else {
    this.playerName = param1.readUTF();
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element of BasicWhoIsMessage.playerId.");
    } else {
      this.areaId = param1.readShort();
      var _loc3_ = param1.readUnsignedShort();
      var _loc4_ = 0;
      while (_loc4_ < _loc3_) {
        _loc5_ = param1.readUnsignedShort();
        _loc6_ = ProtocolTypeManager.getInstance(AbstractSocialGroupInfos, _loc5_);
        _loc6_.deserialize(param1);
        this.socialGroups.push(_loc6_);
        _loc4_++;
      }
      this.playerState = param1.readByte();
      if (this.playerState < 0) {
        throw new Error("Forbidden value (" + this.playerState + ") on element of BasicWhoIsMessage.playerState.");
      } else {
        return;
      }
    }
  }
};

BasicWhoIsMessage.prototype.getMessageId = function() {
  return 180;
};

BasicWhoIsMessage.prototype.getClassName = function() {
  return 'BasicWhoIsMessage';
};

module.exports.id = 180;
module.exports.class = BasicWhoIsMessage;