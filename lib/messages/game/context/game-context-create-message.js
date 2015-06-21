var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextCreateMessage = module.exports = function() {
    this.context = 1;

    return this;
};

require('util').inherits(GameContextCreateMessage, d2com.NetworkMessage.class);

GameContextCreateMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextCreateMessage(output);
};

GameContextCreateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextCreateMessage(input);
};

GameContextCreateMessage.prototype.serializeAs_GameContextCreateMessage = function(param1) {
    param1.writeByte(this.context);
};

GameContextCreateMessage.prototype.deserializeAs_GameContextCreateMessage = function(param1) {
    this.context = param1.readByte();
    if (this.context < 0) {
        throw new Error("Forbidden value (" + this.context + ") on element of GameContextCreateMessage.context.");
    } else {
        return;
    }
};

GameContextCreateMessage.prototype.getMessageId = function() {
    return 200;
};

GameContextCreateMessage.prototype.getClassName = function() {
    return 'GameContextCreateMessage';
};

module.exports.id = 200;