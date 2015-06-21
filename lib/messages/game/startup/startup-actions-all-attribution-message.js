var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var StartupActionsAllAttributionMessage = function() {
    this.characterId = 0;
};

require('util').inherits(StartupActionsAllAttributionMessage, d2com.NetworkMessage.class);

StartupActionsAllAttributionMessage.prototype.serialize = function(output) {
    this.serializeAs_StartupActionsAllAttributionMessage(output);
};

StartupActionsAllAttributionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StartupActionsAllAttributionMessage(input);
};

StartupActionsAllAttributionMessage.prototype.serializeAs_StartupActionsAllAttributionMessage = function(param1) {
    if (this.characterId < 0) {
        throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
    } else {
        param1.writeInt(this.characterId);
        return;
    }
};

StartupActionsAllAttributionMessage.prototype.deserializeAs_StartupActionsAllAttributionMessage = function(param1) {
    this.characterId = param1.readInt();
    if (this.characterId < 0) {
        throw new Error("Forbidden value (" + this.characterId + ") on element of StartupActionsAllAttributionMessage.characterId.");
    } else {
        return;
    }
};

StartupActionsAllAttributionMessage.prototype.getMessageId = function() {
    return 6537;
};

StartupActionsAllAttributionMessage.prototype.getClassName = function() {
    return 'StartupActionsAllAttributionMessage';
};

module.exports.id = 6537;
module.exports.class = StartupActionsAllAttributionMessage;
module.exports.getInstance = function() {
    return new StartupActionsAllAttributionMessage;
};