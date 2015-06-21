var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameContextRemoveElementWithEventMessage = function() {
    this.elementEventId = 0;
};

require('util').inherits(GameContextRemoveElementWithEventMessage, require('./game-context-remove-element-message.js').class);

GameContextRemoveElementWithEventMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextRemoveElementWithEventMessage(output);
};

GameContextRemoveElementWithEventMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextRemoveElementWithEventMessage(input);
};

GameContextRemoveElementWithEventMessage.prototype.serializeAs_GameContextRemoveElementWithEventMessage = function(param1) {
    this.serializeAs_GameContextRemoveElementMessageAs_GameContextRemoveElementMessage(param1);
    if (this.elementEventId < 0) {
        throw new Error("Forbidden value (" + this.elementEventId + ") on element elementEventId.");
    } else {
        param1.writeByte(this.elementEventId);
        return;
    }
};

GameContextRemoveElementWithEventMessage.prototype.deserializeAs_GameContextRemoveElementWithEventMessage = function(param1) {
    this.deserializeAs_GameContextRemoveElementMessage(param1);
    this.elementEventId = param1.readByte();
    if (this.elementEventId < 0) {
        throw new Error("Forbidden value (" + this.elementEventId + ") on element of GameContextRemoveElementWithEventMessage.elementEventId.");
    } else {
        return;
    }
};

GameContextRemoveElementWithEventMessage.prototype.getMessageId = function() {
    return 6412;
};

GameContextRemoveElementWithEventMessage.prototype.getClassName = function() {
    return 'GameContextRemoveElementWithEventMessage';
};

module.exports.id = 6412;
module.exports.class = GameContextRemoveElementWithEventMessage;
module.exports.getInstance = function() {
    return new GameContextRemoveElementWithEventMessage;
};