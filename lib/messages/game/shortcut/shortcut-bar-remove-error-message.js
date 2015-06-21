var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ShortcutBarRemoveErrorMessage = function() {
    this.error = 0;
};

require('util').inherits(ShortcutBarRemoveErrorMessage, d2com.NetworkMessage.class);

ShortcutBarRemoveErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ShortcutBarRemoveErrorMessage(output);
};

ShortcutBarRemoveErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShortcutBarRemoveErrorMessage(input);
};

ShortcutBarRemoveErrorMessage.prototype.serializeAs_ShortcutBarRemoveErrorMessage = function(param1) {
    param1.writeByte(this.error);
};

ShortcutBarRemoveErrorMessage.prototype.deserializeAs_ShortcutBarRemoveErrorMessage = function(param1) {
    this.error = param1.readByte();
    if (this.error < 0) {
        throw new Error("Forbidden value (" + this.error + ") on element of ShortcutBarRemoveErrorMessage.error.");
    } else {
        return;
    }
};

ShortcutBarRemoveErrorMessage.prototype.getMessageId = function() {
    return 6222;
};

ShortcutBarRemoveErrorMessage.prototype.getClassName = function() {
    return 'ShortcutBarRemoveErrorMessage';
};

module.exports.id = 6222;
module.exports.class = ShortcutBarRemoveErrorMessage;
module.exports.getInstance = function() {
    return new ShortcutBarRemoveErrorMessage;
};