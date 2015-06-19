var BaseMessage = require('./abstract-contact-informations.js').class,
  util = require('util');

var FriendInformations = function() {
  this.playerState = 99;
  this.lastConnection = 0;
  this.achievementPoints = 0;
};

util.inherits(FriendInformations, BaseMessage);

FriendInformations.prototype.serialize = function(output) {
  this.serializeAs_FriendInformations(output);
};

FriendInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FriendInformations(input);
};

FriendInformations.prototype.serializeAs_FriendInformations = function(output) {
  this.serializeAs_AbstractContactInformations(output);
  output.writeByte(this.playerState);
  if (this.lastConnection < 0) {
    throw (new Error((("Forbidden value (" + this.lastConnection) + ") on element lastConnection.")));
  };
  output.writeVarShort(this.lastConnection);
  output.writeInt(this.achievementPoints);
};

FriendInformations.prototype.deserializeAs_FriendInformations = function(input) {
  this.deserialize(input);
  this.playerState = input.readByte();
  if (this.playerState < 0) {
    throw (new Error((("Forbidden value (" + this.playerState) + ") on element of FriendInformations.playerState.")));
  };
  this.lastConnection = input.readVarUhShort();
  if (this.lastConnection < 0) {
    throw (new Error((("Forbidden value (" + this.lastConnection) + ") on element of FriendInformations.lastConnection.")));
  };
  this.achievementPoints = input.readInt();
};

FriendInformations.prototype.getTypeId = function() {
  return 78;
};

FriendInformations.prototype.getClassName = function() {
  return 'FriendInformations';
};

module.exports.id = 78;
module.exports.class = FriendInformations;