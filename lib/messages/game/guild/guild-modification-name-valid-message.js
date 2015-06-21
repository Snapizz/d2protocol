var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildModificationNameValidMessage = function() {
    this.guildName = "";
};

require('util').inherits(GuildModificationNameValidMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildModificationNameValidMessage();
};

GuildModificationNameValidMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildModificationNameValidMessage(output);
};

GuildModificationNameValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildModificationNameValidMessage(input);
};

GuildModificationNameValidMessage.prototype.serializeAs_GuildModificationNameValidMessage = function(param1) {
    param1.writeUTF(this.guildName);
};

GuildModificationNameValidMessage.prototype.deserializeAs_GuildModificationNameValidMessage = function(param1) {
    this.guildName = param1.readUTF();
};

GuildModificationNameValidMessage.prototype.getMessageId = function() {
    return 6327;
};

GuildModificationNameValidMessage.prototype.getClassName = function() {
    return 'GuildModificationNameValidMessage';
};

module.exports.id = 6327;
module.exports.GuildModificationNameValidMessage = GuildModificationNameValidMessage;