var FightOptionsInformations = function() {
  this.isSecret = false;
  this.isRestrictedToPartyOnly = false;
  this.isClosed = false;
  this.isAskingForHelp = false;
};



FightOptionsInformations.prototype.serialize = function(output) {
  this.serializeAs_FightOptionsInformations(output);
};

FightOptionsInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightOptionsInformations(input);
};

FightOptionsInformations.prototype.serializeAs_FightOptionsInformations = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.isSecret);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.isRestrictedToPartyOnly);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.isClosed);
  _box0 = BooleanByteWrapper.setFlag(_box0, 3, this.isAskingForHelp);
  output.writeByte(_box0);
};

FightOptionsInformations.prototype.deserializeAs_FightOptionsInformations = function(input) {
  var _box0 = input.readByte();
  this.isSecret = BooleanByteWrapper.getFlag(_box0, 0);
  this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_box0, 1);
  this.isClosed = BooleanByteWrapper.getFlag(_box0, 2);
  this.isAskingForHelp = BooleanByteWrapper.getFlag(_box0, 3);
};

FightOptionsInformations.prototype.getTypeId = function() {
  return 20;
};

FightOptionsInformations.prototype.getClassName = function() {
  return 'FightOptionsInformations';
};

module.exports.id = 20;
module.exports.class = FightOptionsInformations;