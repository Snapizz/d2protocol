var ActorRestrictionsInformations = function() {
  this.cantBeAggressed = false;
  this.cantBeChallenged = false;
  this.cantTrade = false;
  this.cantBeAttackedByMutant = false;
  this.cantRun = false;
  this.forceSlowWalk = false;
  this.cantMinimize = false;
  this.cantMove = false;
  this.cantAggress = false;
  this.cantChallenge = false;
  this.cantExchange = false;
  this.cantAttack = false;
  this.cantChat = false;
  this.cantBeMerchant = false;
  this.cantUseObject = false;
  this.cantUseTaxCollector = false;
  this.cantUseInteractive = false;
  this.cantSpeakToNPC = false;
  this.cantChangeZone = false;
  this.cantAttackMonster = false;
  this.cantWalk8Directions = false;
};



ActorRestrictionsInformations.prototype.serialize = function(output) {
  this.serializeAs_ActorRestrictionsInformations(output);
};

ActorRestrictionsInformations.prototype.deserialize = function(input) {
  this.deserializeAs_ActorRestrictionsInformations(input);
};

ActorRestrictionsInformations.prototype.serializeAs_ActorRestrictionsInformations = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.cantBeAggressed);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.cantBeChallenged);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.cantTrade);
  _box0 = BooleanByteWrapper.setFlag(_box0, 3, this.cantBeAttackedByMutant);
  _box0 = BooleanByteWrapper.setFlag(_box0, 4, this.cantRun);
  _box0 = BooleanByteWrapper.setFlag(_box0, 5, this.forceSlowWalk);
  _box0 = BooleanByteWrapper.setFlag(_box0, 6, this.cantMinimize);
  _box0 = BooleanByteWrapper.setFlag(_box0, 7, this.cantMove);
  output.writeByte(_box0);
  var _box1;
  _box1 = BooleanByteWrapper.setFlag(_box1, 0, this.cantAggress);
  _box1 = BooleanByteWrapper.setFlag(_box1, 1, this.cantChallenge);
  _box1 = BooleanByteWrapper.setFlag(_box1, 2, this.cantExchange);
  _box1 = BooleanByteWrapper.setFlag(_box1, 3, this.cantAttack);
  _box1 = BooleanByteWrapper.setFlag(_box1, 4, this.cantChat);
  _box1 = BooleanByteWrapper.setFlag(_box1, 5, this.cantBeMerchant);
  _box1 = BooleanByteWrapper.setFlag(_box1, 6, this.cantUseObject);
  _box1 = BooleanByteWrapper.setFlag(_box1, 7, this.cantUseTaxCollector);
  output.writeByte(_box1);
  var _box2;
  _box2 = BooleanByteWrapper.setFlag(_box2, 0, this.cantUseInteractive);
  _box2 = BooleanByteWrapper.setFlag(_box2, 1, this.cantSpeakToNPC);
  _box2 = BooleanByteWrapper.setFlag(_box2, 2, this.cantChangeZone);
  _box2 = BooleanByteWrapper.setFlag(_box2, 3, this.cantAttackMonster);
  _box2 = BooleanByteWrapper.setFlag(_box2, 4, this.cantWalk8Directions);
  output.writeByte(_box2);
};

ActorRestrictionsInformations.prototype.deserializeAs_ActorRestrictionsInformations = function(input) {
  var _box0 = input.readByte();
  this.cantBeAggressed = BooleanByteWrapper.getFlag(_box0, 0);
  this.cantBeChallenged = BooleanByteWrapper.getFlag(_box0, 1);
  this.cantTrade = BooleanByteWrapper.getFlag(_box0, 2);
  this.cantBeAttackedByMutant = BooleanByteWrapper.getFlag(_box0, 3);
  this.cantRun = BooleanByteWrapper.getFlag(_box0, 4);
  this.forceSlowWalk = BooleanByteWrapper.getFlag(_box0, 5);
  this.cantMinimize = BooleanByteWrapper.getFlag(_box0, 6);
  this.cantMove = BooleanByteWrapper.getFlag(_box0, 7);
  var _box1 = input.readByte();
  this.cantAggress = BooleanByteWrapper.getFlag(_box1, 0);
  this.cantChallenge = BooleanByteWrapper.getFlag(_box1, 1);
  this.cantExchange = BooleanByteWrapper.getFlag(_box1, 2);
  this.cantAttack = BooleanByteWrapper.getFlag(_box1, 3);
  this.cantChat = BooleanByteWrapper.getFlag(_box1, 4);
  this.cantBeMerchant = BooleanByteWrapper.getFlag(_box1, 5);
  this.cantUseObject = BooleanByteWrapper.getFlag(_box1, 6);
  this.cantUseTaxCollector = BooleanByteWrapper.getFlag(_box1, 7);
  var _box2 = input.readByte();
  this.cantUseInteractive = BooleanByteWrapper.getFlag(_box2, 0);
  this.cantSpeakToNPC = BooleanByteWrapper.getFlag(_box2, 1);
  this.cantChangeZone = BooleanByteWrapper.getFlag(_box2, 2);
  this.cantAttackMonster = BooleanByteWrapper.getFlag(_box2, 3);
  this.cantWalk8Directions = BooleanByteWrapper.getFlag(_box2, 4);
};

ActorRestrictionsInformations.prototype.getTypeId = function() {
  return 204;
};

ActorRestrictionsInformations.prototype.getClassName = function() {
  return 'ActorRestrictionsInformations';
};

module.exports.id = 204;
module.exports.class = ActorRestrictionsInformations;