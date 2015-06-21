var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildPaddockRemovedMessage = function() {
    this.paddockId = 0;
};

require('util').inherits(GuildPaddockRemovedMessage, d2com.NetworkMessage.class);

GuildPaddockRemovedMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildPaddockRemovedMessage(output);
};

GuildPaddockRemovedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildPaddockRemovedMessage(input);
};

GuildPaddockRemovedMessage.prototype.serializeAs_GuildPaddockRemovedMessage = function(param1) {
    param1.writeInt(this.paddockId);
};

GuildPaddockRemovedMessage.prototype.deserializeAs_GuildPaddockRemovedMessage = function(param1) {
    this.paddockId = param1.readInt();
};

GuildPaddockRemovedMessage.prototype.getMessageId = function() {
    return 5955;
};

GuildPaddockRemovedMessage.prototype.getClassName = function() {
    return 'GuildPaddockRemovedMessage';
};

module.exports.id = 5955;
module.exports.class = GuildPaddockRemovedMessage;
module.exports.getInstance = function() {
    return new GuildPaddockRemovedMessage;
};