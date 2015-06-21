var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildPaddockTeleportRequestMessage = function() {
    this.paddockId = 0;
};

require('util').inherits(GuildPaddockTeleportRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildPaddockTeleportRequestMessage();
};

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
module.exports.GuildPaddockTeleportRequestMessage = GuildPaddockTeleportRequestMessage;