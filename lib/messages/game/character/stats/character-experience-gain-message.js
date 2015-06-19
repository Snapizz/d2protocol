var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterExperienceGainMessage = function() {
  this.experienceCharacter = 0;
  this.experienceMount = 0;
  this.experienceGuild = 0;
  this.experienceIncarnation = 0;
};

util.inherits(CharacterExperienceGainMessage, BaseMessage);

CharacterExperienceGainMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterExperienceGainMessage(output);
};

CharacterExperienceGainMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterExperienceGainMessage(input);
};

CharacterExperienceGainMessage.prototype.serializeAs_CharacterExperienceGainMessage = function(output) {
  if ((((this.experienceCharacter < 0)) || ((this.experienceCharacter > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceCharacter) + ") on element experienceCharacter.")));
  };
  output.writeVarLong(this.experienceCharacter);
  if ((((this.experienceMount < 0)) || ((this.experienceMount > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceMount) + ") on element experienceMount.")));
  };
  output.writeVarLong(this.experienceMount);
  if ((((this.experienceGuild < 0)) || ((this.experienceGuild > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceGuild) + ") on element experienceGuild.")));
  };
  output.writeVarLong(this.experienceGuild);
  if ((((this.experienceIncarnation < 0)) || ((this.experienceIncarnation > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceIncarnation) + ") on element experienceIncarnation.")));
  };
  output.writeVarLong(this.experienceIncarnation);
};

CharacterExperienceGainMessage.prototype.deserializeAs_CharacterExperienceGainMessage = function(input) {
  this.experienceCharacter = input.readVarUhLong();
  if ((((this.experienceCharacter < 0)) || ((this.experienceCharacter > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceCharacter) + ") on element of CharacterExperienceGainMessage.experienceCharacter.")));
  };
  this.experienceMount = input.readVarUhLong();
  if ((((this.experienceMount < 0)) || ((this.experienceMount > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceMount) + ") on element of CharacterExperienceGainMessage.experienceMount.")));
  };
  this.experienceGuild = input.readVarUhLong();
  if ((((this.experienceGuild < 0)) || ((this.experienceGuild > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceGuild) + ") on element of CharacterExperienceGainMessage.experienceGuild.")));
  };
  this.experienceIncarnation = input.readVarUhLong();
  if ((((this.experienceIncarnation < 0)) || ((this.experienceIncarnation > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceIncarnation) + ") on element of CharacterExperienceGainMessage.experienceIncarnation.")));
  };
};

CharacterExperienceGainMessage.prototype.getMessageId = function() {
  return 6321;
};

CharacterExperienceGainMessage.prototype.getClassName = function() {
  return 'CharacterExperienceGainMessage';
};

module.exports.id = 6321;
module.exports.class = CharacterExperienceGainMessage;