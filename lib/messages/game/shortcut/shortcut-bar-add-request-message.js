var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var Shortcut = require('../../../types/game/shortcut/shortcut.js').class;

var ShortcutBarAddRequestMessage = module.exports = function() {
    this.barType = 0;
    this.shortcut = new Shortcut();

    return this;
};

require('util').inherits(ShortcutBarAddRequestMessage, d2com.NetworkMessage.class);

ShortcutBarAddRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ShortcutBarAddRequestMessage(output);
};

ShortcutBarAddRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShortcutBarAddRequestMessage(input);
};

ShortcutBarAddRequestMessage.prototype.serializeAs_ShortcutBarAddRequestMessage = function(param1) {
    param1.writeByte(this.barType);
    param1.writeShort(this.shortcut.getTypeId());
    this.shortcut.serialize(param1);
};

ShortcutBarAddRequestMessage.prototype.deserializeAs_ShortcutBarAddRequestMessage = function(param1) {
    this.barType = param1.readByte();
    if (this.barType < 0) {
        throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarAddRequestMessage.barType.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        this.shortcut = ProtocolTypeManager.getInstance(Shortcut, _loc2_);
        this.shortcut.deserialize(param1);
        return;
    }
};

ShortcutBarAddRequestMessage.prototype.getMessageId = function() {
    return 6225;
};

ShortcutBarAddRequestMessage.prototype.getClassName = function() {
    return 'ShortcutBarAddRequestMessage';
};

module.exports.id = 6225;