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
  if (this.experienceCharacter < 0 || this.experienceCharacter > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.experienceCharacter + ") on element experienceCharacter.");
  } else {
    param1.writeVarLong(this.experienceCharacter);
    if (this.experienceMount < 0 || this.experienceMount > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.experienceMount + ") on element experienceMount.");
    } else {
      param1.writeVarLong(this.experienceMount);
      if (this.experienceGuild < 0 || this.experienceGuild > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.experienceGuild + ") on element experienceGuild.");
      } else {
        param1.writeVarLong(this.experienceGuild);
        if (this.experienceIncarnation < 0 || this.experienceIncarnation > 9.007199254740992E15) {
          throw new Error("Forbidden value (" + this.experienceIncarnation + ") on element experienceIncarnation.");
        } else {
          param1.writeVarLong(this.experienceIncarnation);
          return;
        }
      }
    }
  }
};

CharacterExperienceGainMessage.prototype.deserializeAs_CharacterExperienceGainMessage = function(input) {
  this.experienceCharacter = param1.readVarUhLong();
  if (this.experienceCharacter < 0 || this.experienceCharacter > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.experienceCharacter + ") on element of CharacterExperienceGainMessage.experienceCharacter.");
  } else {
    this.experienceMount = param1.readVarUhLong();
    if (this.experienceMount < 0 || this.experienceMount > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.experienceMount + ") on element of CharacterExperienceGainMessage.experienceMount.");
    } else {
      this.experienceGuild = param1.readVarUhLong();
      if (this.experienceGuild < 0 || this.experienceGuild > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.experienceGuild + ") on element of CharacterExperienceGainMessage.experienceGuild.");
      } else {
        this.experienceIncarnation = param1.readVarUhLong();
        if (this.experienceIncarnation < 0 || this.experienceIncarnation > 9.007199254740992E15) {
          throw new Error("Forbidden value (" + this.experienceIncarnation + ") on element of CharacterExperienceGainMessage.experienceIncarnation.");
        } else {
          return;
        }
      }
    }
  }
};

CharacterExperienceGainMessage.prototype.getMessageId = function() {
  return 6321;
};

CharacterExperienceGainMessage.prototype.getClassName = function() {
  return 'CharacterExperienceGainMessage';
};

module.exports.id = 6321;
module.exports.class = CharacterExperienceGainMessage;