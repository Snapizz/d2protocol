var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionAcknowledgementMessage = module.exports = function() {
    this.valid = false;
    this.actionId = 0;

    return this;
};

require('util').inherits(GameActionAcknowledgementMessage, d2com.NetworkMessage.class);

GameActionAcknowledgementMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionAcknowledgementMessage(output);
};

GameActionAcknowledgementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionAcknowledgementMessage(input);
};

GameActionAcknowledgementMessage.prototype.serializeAs_GameActionAcknowledgementMessage = function(param1) {
    param1.writeBoolean(this.valid);
    param1.writeByte(this.actionId);
};

GameActionAcknowledgementMessage.prototype.deserializeAs_GameActionAcknowledgementMessage = function(param1) {
    this.valid = param1.readBoolean();
    this.actionId = param1.readByte();
};

GameActionAcknowledgementMessage.prototype.getMessageId = function() {
    return 957;
};

GameActionAcknowledgementMessage.prototype.getClassName = function() {
    return 'GameActionAcknowledgementMessage';
};

module.exports.id = 957;