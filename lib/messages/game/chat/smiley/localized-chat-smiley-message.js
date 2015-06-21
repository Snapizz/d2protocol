var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LocalizedChatSmileyMessage = module.exports = function() {
    this.cellId = 0;

    return this;
};

require('util').inherits(LocalizedChatSmileyMessage, require('./chat-smiley-message.js'));

LocalizedChatSmileyMessage.prototype.serialize = function(output) {
    this.serializeAs_LocalizedChatSmileyMessage(output);
};

LocalizedChatSmileyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LocalizedChatSmileyMessage(input);
};

LocalizedChatSmileyMessage.prototype.serializeAs_LocalizedChatSmileyMessage = function(param1) {
    this.serializeAs_ChatSmileyMessage(param1);
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeVarShort(this.cellId);
        return;
    }
};

LocalizedChatSmileyMessage.prototype.deserializeAs_LocalizedChatSmileyMessage = function(param1) {
    this.deserializeAs_ChatSmileyMessage(param1);
    this.cellId = param1.readVarUhShort();
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of LocalizedChatSmileyMessage.cellId.");
    } else {
        return;
    }
};

LocalizedChatSmileyMessage.prototype.getMessageId = function() {
    return 6185;
};

LocalizedChatSmileyMessage.prototype.getClassName = function() {
    return 'LocalizedChatSmileyMessage';
};

module.exports.id = 6185;