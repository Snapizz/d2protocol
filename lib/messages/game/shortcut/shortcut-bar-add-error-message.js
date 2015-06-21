var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ShortcutBarAddErrorMessage = function() {
    this.error = 0;
};

require('util').inherits(ShortcutBarAddErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ShortcutBarAddErrorMessage();
};

ShortcutBarAddErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ShortcutBarAddErrorMessage(output);
};

ShortcutBarAddErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShortcutBarAddErrorMessage(input);
};

ShortcutBarAddErrorMessage.prototype.serializeAs_ShortcutBarAddErrorMessage = function(param1) {
    param1.writeByte(this.error);
};

ShortcutBarAddErrorMessage.prototype.deserializeAs_ShortcutBarAddErrorMessage = function(param1) {
    this.error = param1.readByte();
    if (this.error < 0) {
        throw new Error("Forbidden value (" + this.error + ") on element of ShortcutBarAddErrorMessage.error.");
    } else {
        return;
    }
};

ShortcutBarAddErrorMessage.prototype.getMessageId = function() {
    return 6227;
};

ShortcutBarAddErrorMessage.prototype.getClassName = function() {
    return 'ShortcutBarAddErrorMessage';
};

module.exports.id = 6227;
module.exports.ShortcutBarAddErrorMessage = ShortcutBarAddErrorMessage;