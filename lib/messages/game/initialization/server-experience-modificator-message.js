var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ServerExperienceModificatorMessage = module.exports = function() {
    this.experiencePercent = 0;

    return this;
};

require('util').inherits(ServerExperienceModificatorMessage, d2com.NetworkMessage.class);

ServerExperienceModificatorMessage.prototype.serialize = function(output) {
    this.serializeAs_ServerExperienceModificatorMessage(output);
};

ServerExperienceModificatorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ServerExperienceModificatorMessage(input);
};

ServerExperienceModificatorMessage.prototype.serializeAs_ServerExperienceModificatorMessage = function(param1) {
    if (this.experiencePercent < 0) {
        throw new Error("Forbidden value (" + this.experiencePercent + ") on element experiencePercent.");
    } else {
        param1.writeVarShort(this.experiencePercent);
        return;
    }
};

ServerExperienceModificatorMessage.prototype.deserializeAs_ServerExperienceModificatorMessage = function(param1) {
    this.experiencePercent = param1.readVarUhShort();
    if (this.experiencePercent < 0) {
        throw new Error("Forbidden value (" + this.experiencePercent + ") on element of ServerExperienceModificatorMessage.experiencePercent.");
    } else {
        return;
    }
};

ServerExperienceModificatorMessage.prototype.getMessageId = function() {
    return 6237;
};

ServerExperienceModificatorMessage.prototype.getClassName = function() {
    return 'ServerExperienceModificatorMessage';
};

module.exports.id = 6237;