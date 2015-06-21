var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var WarnOnPermaDeathMessage = module.exports = function() {
    this.enable = false;

    return this;
};

require('util').inherits(WarnOnPermaDeathMessage, d2com.NetworkMessage.class);

WarnOnPermaDeathMessage.prototype.serialize = function(output) {
    this.serializeAs_WarnOnPermaDeathMessage(output);
};

WarnOnPermaDeathMessage.prototype.deserialize = function(input) {
    this.deserializeAs_WarnOnPermaDeathMessage(input);
};

WarnOnPermaDeathMessage.prototype.serializeAs_WarnOnPermaDeathMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

WarnOnPermaDeathMessage.prototype.deserializeAs_WarnOnPermaDeathMessage = function(param1) {
    this.enable = param1.readBoolean();
};

WarnOnPermaDeathMessage.prototype.getMessageId = function() {
    return 6512;
};

WarnOnPermaDeathMessage.prototype.getClassName = function() {
    return 'WarnOnPermaDeathMessage';
};

module.exports.id = 6512;