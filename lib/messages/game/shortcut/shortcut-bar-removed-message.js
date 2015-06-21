var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ShortcutBarRemovedMessage = function() {
    this.barType = 0;
    this.slot = 0;
};

require('util').inherits(ShortcutBarRemovedMessage, d2com.NetworkMessage.class);

ShortcutBarRemovedMessage.prototype.serialize = function(output) {
    this.serializeAs_ShortcutBarRemovedMessage(output);
};

ShortcutBarRemovedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShortcutBarRemovedMessage(input);
};

ShortcutBarRemovedMessage.prototype.serializeAs_ShortcutBarRemovedMessage = function(param1) {
    param1.writeByte(this.barType);
    if (this.slot < 0 || this.slot > 99) {
        throw new Error("Forbidden value (" + this.slot + ") on element slot.");
    } else {
        param1.writeByte(this.slot);
        return;
    }
};

ShortcutBarRemovedMessage.prototype.deserializeAs_ShortcutBarRemovedMessage = function(param1) {
    this.barType = param1.readByte();
    if (this.barType < 0) {
        throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarRemovedMessage.barType.");
    } else {
        this.slot = param1.readByte();
        if (this.slot < 0 || this.slot > 99) {
            throw new Error("Forbidden value (" + this.slot + ") on element of ShortcutBarRemovedMessage.slot.");
        } else {
            return;
        }
    }
};

ShortcutBarRemovedMessage.prototype.getMessageId = function() {
    return 6224;
};

ShortcutBarRemovedMessage.prototype.getClassName = function() {
    return 'ShortcutBarRemovedMessage';
};

module.exports.id = 6224;
module.exports.class = ShortcutBarRemovedMessage;
module.exports.getInstance = function() {
    return new ShortcutBarRemovedMessage;
};