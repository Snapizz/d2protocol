var BaseMessage = require('./fight-result-additional-data.js').class,
  util = require('util');

var FightResultAdditionalData = function() {

};

util.inherits(FightResultAdditionalData, BaseMessage);

FightResultAdditionalData.prototype.serialize = function(output) {
  this.serializeAs_FightResultAdditionalData(output);
};

FightResultAdditionalData.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultAdditionalData(input);
};

FightResultAdditionalData.prototype.serializeAs_FightResultAdditionalData = function(param1) {

};

FightResultAdditionalData.prototype.deserializeAs_FightResultAdditionalData = function(param1) {

};

FightResultAdditionalData.prototype.getTypeId = function() {
  return 191;
};

FightResultAdditionalData.prototype.getClassName = function() {
  return 'FightResultAdditionalData';
};

module.exports.id = 191;
module.exports.class = FightResultAdditionalData;
module.exports.getInstance = function() {
  return new FightResultAdditionalData();
};