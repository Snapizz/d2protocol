var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextReadyMessage = function() {
    this.mapId = 0;
};

require('util').inherits(GameContextReadyMessage, d2com.NetworkMessage.class);

GameContextReadyMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextReadyMessage(output);
};

GameContextReadyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextReadyMessage(input);
};

GameContextReadyMessage.prototype.serializeAs_GameContextReadyMessage = function(param1) {
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
        param1.writeInt(this.mapId);
        return;
    }
};

GameContextReadyMessage.prototype.deserializeAs_GameContextReadyMessage = function(param1) {
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element of GameContextReadyMessage.mapId.");
    } else {
        return;
    }
};

GameContextReadyMessage.prototype.getMessageId = function() {
    return 6071;
};

GameContextReadyMessage.prototype.getClassName = function() {
    return 'GameContextReadyMessage';
};

module.exports.id = 6071;
module.exports.class = GameContextReadyMessage;
module.exports.getInstance = function() {
    return new GameContextReadyMessage;
};