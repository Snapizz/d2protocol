var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextKickMessage = function() {
    this.targetId = 0;
};

require('util').inherits(GameContextKickMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameContextKickMessage();
};

GameContextKickMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextKickMessage(output);
};

GameContextKickMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextKickMessage(input);
};

GameContextKickMessage.prototype.serializeAs_GameContextKickMessage = function(param1) {
    param1.writeInt(this.targetId);
};

GameContextKickMessage.prototype.deserializeAs_GameContextKickMessage = function(param1) {
    this.targetId = param1.readInt();
};

GameContextKickMessage.prototype.getMessageId = function() {
    return 6081;
};

GameContextKickMessage.prototype.getClassName = function() {
    return 'GameContextKickMessage';
};

module.exports.id = 6081;
module.exports.GameContextKickMessage = GameContextKickMessage;