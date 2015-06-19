var BaseMessage = require('./player-status.js').class,
  util = require('util');

var PlayerStatusExtended = function() {
  this.message = "";
};

util.inherits(PlayerStatusExtended, BaseMessage);

PlayerStatusExtended.prototype.serialize = function(output) {
  this.serializeAs_PlayerStatusExtended(output);
};

PlayerStatusExtended.prototype.deserialize = function(input) {
  this.deserializeAs_PlayerStatusExtended(input);
};

PlayerStatusExtended.prototype.serializeAs_PlayerStatusExtended = function(output) {
  this.serializeAs_PlayerStatus(output);
  output.writeUTF(this.message);
};

PlayerStatusExtended.prototype.deserializeAs_PlayerStatusExtended = function(input) {
  this.deserialize(input);
  this.message = input.readUTF();
};

PlayerStatusExtended.prototype.getTypeId = function() {
  return 414;
};

PlayerStatusExtended.prototype.getClassName = function() {
  return 'PlayerStatusExtended';
};

module.exports.id = 414;
module.exports.class = PlayerStatusExtended;