var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildMemberWarnOnConnectionStateMessage = function() {
    this.enable = false;
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
module.exports.class = GuildMemberWarnOnConnectionStateMessage;
module.exports.getInstance = function() {
    return new GuildMemberWarnOnConnectionStateMessage;
};