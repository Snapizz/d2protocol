var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightLeaveMessage = module.exports = function() {
    this.charId = 0;

    return this;
};

require('util').inherits(GameFightLeaveMessage, d2com.NetworkMessage.class);

GameFightLeaveMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightLeaveMessage(output);
};

GameFightLeaveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightLeaveMessage(input);
};

GameFightLeaveMessage.prototype.serializeAs_GameFightLeaveMessage = function(param1) {
    param1.writeInt(this.charId);
};

GameFightLeaveMessage.prototype.deserializeAs_GameFightLeaveMessage = function(param1) {
    this.charId = param1.readInt();
};

GameFightLeaveMessage.prototype.getMessageId = function() {
    return 721;
};

GameFightLeaveMessage.prototype.getClassName = function() {
    return 'GameFightLeaveMessage';
};

module.exports.id = 721;