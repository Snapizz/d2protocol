var GameFightAIInformations = function() {

};



GameFightAIInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightAIInformations(output);
};

GameFightAIInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightAIInformations(input);
};

GameFightAIInformations.prototype.serializeAs_GameFightAIInformations = function(output) {
  super.serializeAs_GameFightFighterInformations(param1);
};

GameFightAIInformations.prototype.deserializeAs_GameFightAIInformations = function(input) {
  super.deserialize(param1);
};

GameFightAIInformations.prototype.getTypeId = function() {
  return 151;
};

GameFightAIInformations.prototype.getClassName = function() {
  return 'GameFightAIInformations';
};

module.exports.id = 151;
module.exports.class = GameFightAIInformations;