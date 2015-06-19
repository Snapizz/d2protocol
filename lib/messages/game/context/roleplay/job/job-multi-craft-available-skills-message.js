var d2com = require('d2com'),
  BaseMessage = require('./job-allow-multi-craft-request-message.js').class,
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
  this.serializeAs_JobAllowMultiCraftRequestMessage(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeShort(this.skills.length);
  var _i2;
  while (_i2 < this.skills.length) {
    if (this.skills[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.skills[_i2]) + ") on element 2 (starting at 1) of skills.")));
    };
    output.writeVarShort(this.skills[_i2]);
    _i2++;
  };
};

JobMultiCraftAvailableSkillsMessage.prototype.deserializeAs_JobMultiCraftAvailableSkillsMessage = function(input) {
  var _val2;
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of JobMultiCraftAvailableSkillsMessage.playerId.")));
  };
  var _skillsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _skillsLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of skills.")));
    };
    this.skills.push(_val2);
    _i2++;
  };
};

JobMultiCraftAvailableSkillsMessage.prototype.getMessageId = function() {
  return 5747;
};

JobMultiCraftAvailableSkillsMessage.prototype.getClassName = function() {
  return 'JobMultiCraftAvailableSkillsMessage';
};

module.exports.id = 5747;
module.exports.class = JobMultiCraftAvailableSkillsMessage;