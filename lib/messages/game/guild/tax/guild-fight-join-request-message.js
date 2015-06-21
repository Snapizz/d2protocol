var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildFightJoinRequestMessage = module.exports = function() {
    this.taxCollectorId = 0;

    return this;
};

require('util').inherits(GuildFightJoinRequestMessage, d2com.NetworkMessage.class);

GuildFightJoinRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFightJoinRequestMessage(output);
};

GuildFightJoinRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFightJoinRequestMessage(input);
};

GuildFightJoinRequestMessage.prototype.serializeAs_GuildFightJoinRequestMessage = function(param1) {
    param1.writeInt(this.taxCollectorId);
};

GuildFightJoinRequestMessage.prototype.deserializeAs_GuildFightJoinRequestMessage = function(param1) {
    this.taxCollectorId = param1.readInt();
};

GuildFightJoinRequestMessage.prototype.getMessageId = function() {
    return 5717;
};

GuildFightJoinRequestMessage.prototype.getClassName = function() {
    return 'GuildFightJoinRequestMessage';
};

module.exports.id = 5717;