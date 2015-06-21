var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildCreationResultMessage = function() {
    this.result = 0;
};

require('util').inherits(GuildCreationResultMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildCreationResultMessage();
};

GuildCreationResultMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildCreationResultMessage(output);
};

GuildCreationResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildCreationResultMessage(input);
};

GuildCreationResultMessage.prototype.serializeAs_GuildCreationResultMessage = function(param1) {
    param1.writeByte(this.result);
};

GuildCreationResultMessage.prototype.deserializeAs_GuildCreationResultMessage = function(param1) {
    this.result = param1.readByte();
    if (this.result < 0) {
        throw new Error("Forbidden value (" + this.result + ") on element of GuildCreationResultMessage.result.");
    } else {
        return;
    }
};

GuildCreationResultMessage.prototype.getMessageId = function() {
    return 5554;
};

GuildCreationResultMessage.prototype.getClassName = function() {
    return 'GuildCreationResultMessage';
};

module.exports.id = 5554;
module.exports.GuildCreationResultMessage = GuildCreationResultMessage;