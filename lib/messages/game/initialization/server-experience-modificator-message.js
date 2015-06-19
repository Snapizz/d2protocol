var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ServerExperienceModificatorMessage = function() {
  this.experiencePercent = 0;
};

util.inherits(ServerExperienceModificatorMessage, BaseMessage);

ServerExperienceModificatorMessage.prototype.serialize = function(output) {
  this.serializeAs_ServerExperienceModificatorMessage(output);
};

ServerExperienceModificatorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ServerExperienceModificatorMessage(input);
};

ServerExperienceModificatorMessage.prototype.serializeAs_ServerExperienceModificatorMessage = function(output) {
  if (this.experiencePercent < 0) {
    throw (new Error((("Forbidden value (" + this.experiencePercent) + ") on element experiencePercent.")));
  };
  output.writeVarShort(this.experiencePercent);
};

ServerExperienceModificatorMessage.prototype.deserializeAs_ServerExperienceModificatorMessage = function(input) {
  this.experiencePercent = input.readVarUhShort();
  if (this.experiencePercent < 0) {
    throw (new Error((("Forbidden value (" + this.experiencePercent) + ") on element of ServerExperienceModificatorMessage.experiencePercent.")));
  };
};

ServerExperienceModificatorMessage.prototype.getMessageId = function() {
  return 6237;
};

ServerExperienceModificatorMessage.prototype.getClassName = function() {
  return 'ServerExperienceModificatorMessage';
};

module.exports.id = 6237;
module.exports.class = ServerExperienceModificatorMessage;