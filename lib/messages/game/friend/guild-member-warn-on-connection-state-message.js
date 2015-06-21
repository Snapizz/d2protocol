var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildMemberWarnOnConnectionStateMessage = module.exports = function() {
    this.enable = false;

    return this;
};

require('util').inherits(GuildMemberWarnOnConnectionStateMessage, d2com.NetworkMessage.class);

GuildMemberWarnOnConnectionStateMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildMemberWarnOnConnectionStateMessage(output);
};

GuildMemberWarnOnConnectionStateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildMemberWarnOnConnectionStateMessage(input);
};

GuildMemberWarnOnConnectionStateMessage.prototype.serializeAs_GuildMemberWarnOnConnectionStateMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

GuildMemberWarnOnConnectionStateMessage.prototype.deserializeAs_GuildMemberWarnOnConnectionStateMessage = function(param1) {
    this.enable = param1.readBoolean();
};

GuildMemberWarnOnConnectionStateMessage.prototype.getMessageId = function() {
    return 6160;
};

GuildMemberWarnOnConnectionStateMessage.prototype.getClassName = function() {
    return 'GuildMemberWarnOnConnectionStateMessage';
};

module.exports.id = 6160;