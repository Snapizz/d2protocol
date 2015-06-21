var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildMemberSetWarnOnConnectionMessage = function() {
    this.enable = false;
};

require('util').inherits(GuildMemberSetWarnOnConnectionMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildMemberSetWarnOnConnectionMessage();
};

GuildMemberSetWarnOnConnectionMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildMemberSetWarnOnConnectionMessage(output);
};

GuildMemberSetWarnOnConnectionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildMemberSetWarnOnConnectionMessage(input);
};

GuildMemberSetWarnOnConnectionMessage.prototype.serializeAs_GuildMemberSetWarnOnConnectionMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

GuildMemberSetWarnOnConnectionMessage.prototype.deserializeAs_GuildMemberSetWarnOnConnectionMessage = function(param1) {
    this.enable = param1.readBoolean();
};

GuildMemberSetWarnOnConnectionMessage.prototype.getMessageId = function() {
    return 6159;
};

GuildMemberSetWarnOnConnectionMessage.prototype.getClassName = function() {
    return 'GuildMemberSetWarnOnConnectionMessage';
};

module.exports.id = 6159;
module.exports.GuildMemberSetWarnOnConnectionMessage = GuildMemberSetWarnOnConnectionMessage;