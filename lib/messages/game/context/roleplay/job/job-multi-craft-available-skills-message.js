var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobMultiCraftAvailableSkillsMessage = function() {
  this.playerId = 0;
  this.skills = [];
};

util.inherits(JobMultiCraftAvailableSkillsMessage, BaseMessage);

JobMultiCraftAvailableSkillsMessage.prototype.serialize = function(output) {
  this.serializeAs_JobMultiCraftAvailableSkillsMessage(output);
};

JobMultiCraftAvailableSkillsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobMultiCraftAvailableSkillsMessage(input);
};

JobMultiCraftAvailableSkillsMessage.prototype.serializeAs_JobMultiCraftAvailableSkillsMessage = function(output) {
  super.serializeAs_JobAllowMultiCraftRequestMessage(param1);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    param1.writeShort(this.skills.length);
    var _loc2_ = 0;
    while (_loc2_ < this.skills.length) {
      if (this.skills[_loc2_] < 0) {
        throw new Error("Forbidden value (" + this.skills[_loc2_] + ") on element 2 (starting at 1) of skills.");
      } else {
        param1.writeVarShort(this.skills[_loc2_]);
        _loc2_++;
        continue;
      }
    }
    return;
  }
};

JobMultiCraftAvailableSkillsMessage.prototype.deserializeAs_JobMultiCraftAvailableSkillsMessage = function(input) {
  var _loc4_ = 0;
  super.deserialize(param1);
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of JobMultiCraftAvailableSkillsMessage.playerId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readVarUhShort();
      if (_loc4_ < 0) {
        throw new Error("Forbidden value (" + _loc4_ + ") on elements of skills.");
      } else {
        this.skills.push(_loc4_);
        _loc3_++;
        continue;
      }
    }
    return;
  }
};

JobMultiCraftAvailableSkillsMessage.prototype.getMessageId = function() {
  return 5747;
};

JobMultiCraftAvailableSkillsMessage.prototype.getClassName = function() {
  return 'JobMultiCraftAvailableSkillsMessage';
};

module.exports.id = 5747;
module.exports.class = JobMultiCraftAvailableSkillsMessage;