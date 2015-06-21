var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var EmotePlayMessage = module.exports = function() {
    this.actorId = 0;
    this.accountId = 0;

    return this;
};

require('util').inherits(EmotePlayMessage, require('./emote-play-abstract-message.js'));

EmotePlayMessage.prototype.serialize = function(output) {
    this.serializeAs_EmotePlayMessage(output);
};

EmotePlayMessage.prototype.deserialize = function(input) {
    this.deserializeAs_EmotePlayMessage(input);
};

EmotePlayMessage.prototype.serializeAs_EmotePlayMessage = function(param1) {
    this.serializeAs_EmotePlayAbstractMessage(param1);
    param1.writeInt(this.actorId);
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        return;
    }
};

EmotePlayMessage.prototype.deserializeAs_EmotePlayMessage = function(param1) {
    this.deserializeAs_EmotePlayAbstractMessage(param1);
    this.actorId = param1.readInt();
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of EmotePlayMessage.accountId.");
    } else {
        return;
    }
};

EmotePlayMessage.prototype.getMessageId = function() {
    return 5683;
};

EmotePlayMessage.prototype.getClassName = function() {
    return 'EmotePlayMessage';
};

module.exports.id = 5683;