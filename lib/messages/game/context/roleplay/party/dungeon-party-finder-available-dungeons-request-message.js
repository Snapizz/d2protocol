var d2com = require('d2com'),
  BaseMessage = require('./dungeon-party-finder-available-dungeons-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var DungeonPartyFinderAvailableDungeonsRequestMessage = function() {

};

util.inherits(DungeonPartyFinderAvailableDungeonsRequestMessage, BaseMessage);

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(output);
};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(input);
};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage = function(param1) {

};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage = function(param1) {

};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.getMessageId = function() {
  return 6240;
};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderAvailableDungeonsRequestMessage';
};

module.exports.id = 6240;
module.exports.class = DungeonPartyFinderAvailableDungeonsRequestMessage;
module.exports.getInstance = function() {
  return new DungeonPartyFinderAvailableDungeonsRequestMessage();
};