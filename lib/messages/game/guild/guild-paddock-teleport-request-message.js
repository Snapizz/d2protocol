var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildPaddockTeleportRequestMessage = module.exports = function() {
    this.paddockId = 0;

    return this;
};

require('util').inherits(GuildPaddockTeleportRequestMessage, d2com.NetworkMessage.class);

GuildPaddockTeleportRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildPaddockTeleportRequestMessage(output);
};

GuildPaddockTeleportRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildPaddockTeleportRequestMessage(input);
};

GuildPaddockTeleportRequestMessage.prototype.serializeAs_GuildPaddockTeleportRequestMessage = function(param1) {
    param1.writeInt(this.paddockId);
};

GuildPaddockTeleportRequestMessage.prototype.deserializeAs_GuildPaddockTeleportRequestMessage = function(param1) {
    this.paddockId = param1.readInt();
};

GuildPaddockTeleportRequestMessage.prototype.getMessageId = function() {
    return 5957;
};

GuildPaddockTeleportRequestMessage.prototype.getClassName = function() {
    return 'GuildPaddockTeleportRequestMessage';
};

module.exports.id = 5957;