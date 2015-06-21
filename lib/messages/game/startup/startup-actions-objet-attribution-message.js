var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var StartupActionsObjetAttributionMessage = function() {
    this.actionId = 0;
    this.characterId = 0;
};

require('util').inherits(StartupActionsObjetAttributionMessage, d2com.NetworkMessage.class);

StartupActionsObjetAttributionMessage.prototype.serialize = function(output) {
    this.serializeAs_StartupActionsObjetAttributionMessage(output);
};

StartupActionsObjetAttributionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StartupActionsObjetAttributionMessage(input);
};

StartupActionsObjetAttributionMessage.prototype.serializeAs_StartupActionsObjetAttributionMessage = function(param1) {
    if (this.actionId < 0) {
        throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
    } else {
        param1.writeInt(this.actionId);
        if (this.characterId < 0) {
            throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
        } else {
            param1.writeInt(this.characterId);
            return;
        }
    }
};

StartupActionsObjetAttributionMessage.prototype.deserializeAs_StartupActionsObjetAttributionMessage = function(param1) {
    this.actionId = param1.readInt();
    if (this.actionId < 0) {
        throw new Error("Forbidden value (" + this.actionId + ") on element of StartupActionsObjetAttributionMessage.actionId.");
    } else {
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error("Forbidden value (" + this.characterId + ") on element of StartupActionsObjetAttributionMessage.characterId.");
        } else {
            return;
        }
    }
};

StartupActionsObjetAttributionMessage.prototype.getMessageId = function() {
    return 1303;
};

StartupActionsObjetAttributionMessage.prototype.getClassName = function() {
    return 'StartupActionsObjetAttributionMessage';
};

module.exports.id = 1303;
module.exports.class = StartupActionsObjetAttributionMessage;
module.exports.getInstance = function() {
    return new StartupActionsObjetAttributionMessage;
};