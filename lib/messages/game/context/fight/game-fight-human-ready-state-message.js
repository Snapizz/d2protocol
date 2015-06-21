var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightHumanReadyStateMessage = function() {
    this.characterId = 0;
    this.isReady = false;
};

require('util').inherits(GameFightHumanReadyStateMessage, d2com.NetworkMessage.class);

GameFightHumanReadyStateMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightHumanReadyStateMessage(output);
};

GameFightHumanReadyStateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightHumanReadyStateMessage(input);
};

GameFightHumanReadyStateMessage.prototype.serializeAs_GameFightHumanReadyStateMessage = function(param1) {
    if (this.characterId < 0) {
        throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
    } else {
        param1.writeVarInt(this.characterId);
        param1.writeBoolean(this.isReady);
        return;
    }
};

GameFightHumanReadyStateMessage.prototype.deserializeAs_GameFightHumanReadyStateMessage = function(param1) {
    this.characterId = param1.readVarUhInt();
    if (this.characterId < 0) {
        throw new Error("Forbidden value (" + this.characterId + ") on element of GameFightHumanReadyStateMessage.characterId.");
    } else {
        this.isReady = param1.readBoolean();
        return;
    }
};

GameFightHumanReadyStateMessage.prototype.getMessageId = function() {
    return 740;
};

GameFightHumanReadyStateMessage.prototype.getClassName = function() {
    return 'GameFightHumanReadyStateMessage';
};

module.exports.id = 740;
module.exports.class = GameFightHumanReadyStateMessage;
module.exports.getInstance = function() {
    return new GameFightHumanReadyStateMessage;
};