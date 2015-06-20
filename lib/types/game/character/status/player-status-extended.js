var PlayerStatusExtended = function() {
  this.message = "";
};



PlayerStatusExtended.prototype.serialize = function(output) {
  this.serializeAs_PlayerStatusExtended(output);
};

PlayerStatusExtended.prototype.deserialize = function(input) {
  this.deserializeAs_PlayerStatusExtended(input);
};

PlayerStatusExtended.prototype.serializeAs_PlayerStatusExtended = function(param1) {
  this.serializeAs_PlayerStatus(param1);
  param1.writeUTF(this.message);
};

PlayerStatusExtended.prototype.deserializeAs_PlayerStatusExtended = function(param1) {
  this.deserialize(param1);
  this.message = param1.readUTF();
};

PlayerStatusExtended.prototype.getTypeId = function() {
  return 414;
};

PlayerStatusExtended.prototype.getClassName = function() {
  return 'PlayerStatusExtended';
};

module.exports.id = 414;
module.exports.class = PlayerStatusExtended;
module.exports.getInstance = function() {
  return new PlayerStatusExtended();
};