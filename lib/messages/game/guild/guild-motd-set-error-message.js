var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildMotdSetErrorMessage = function() {
    this.reason = 0;
};

require('util').inherits(GuildMotdSetErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildMotdSetErrorMessage();
};

GuildMotdSetErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildMotdSetErrorMessage(output);
};

GuildMotdSetErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildMotdSetErrorMessage(input);
};

GuildMotdSetErrorMessage.prototype.serializeAs_GuildMotdSetErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

GuildMotdSetErrorMessage.prototype.deserializeAs_GuildMotdSetErrorMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of GuildMotdSetErrorMessage.reason.");
    } else {
        return;
    }
};

GuildMotdSetErrorMessage.prototype.getMessageId = function() {
    return 6591;
};

GuildMotdSetErrorMessage.prototype.getClassName = function() {
    return 'GuildMotdSetErrorMessage';
};

module.exports.id = 6591;
module.exports.GuildMotdSetErrorMessage = GuildMotdSetErrorMessage;