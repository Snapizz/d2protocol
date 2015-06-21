var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var Shortcut = require('../../../types/game/shortcut/shortcut.js').class;

var ShortcutBarRefreshMessage = function() {
    this.barType = 0;
    this.shortcut = new Shortcut();
};

require('util').inherits(ShortcutBarRefreshMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ShortcutBarRefreshMessage();
};

ShortcutBarRefreshMessage.prototype.serialize = function(output) {
    this.serializeAs_ShortcutBarRefreshMessage(output);
};

ShortcutBarRefreshMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShortcutBarRefreshMessage(input);
};

ShortcutBarRefreshMessage.prototype.serializeAs_ShortcutBarRefreshMessage = function(param1) {
    param1.writeByte(this.barType);
    param1.writeShort(this.shortcut.getTypeId());
    this.shortcut.serialize(param1);
};

ShortcutBarRefreshMessage.prototype.deserializeAs_ShortcutBarRefreshMessage = function(param1) {
    this.barType = param1.readByte();
    if (this.barType < 0) {
        throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarRefreshMessage.barType.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        this.shortcut = ProtocolTypeManager.getInstance(Shortcut, _loc2_);
        this.shortcut.deserialize(param1);
        return;
    }
};

ShortcutBarRefreshMessage.prototype.getMessageId = function() {
    return 6229;
};

ShortcutBarRefreshMessage.prototype.getClassName = function() {
    return 'ShortcutBarRefreshMessage';
};

module.exports.id = 6229;
module.exports.ShortcutBarRefreshMessage = ShortcutBarRefreshMessage;