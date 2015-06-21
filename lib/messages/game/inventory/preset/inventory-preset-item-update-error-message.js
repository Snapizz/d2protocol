var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryPresetItemUpdateErrorMessage = function() {
    this.code = 1;
};

require('util').inherits(InventoryPresetItemUpdateErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InventoryPresetItemUpdateErrorMessage();
};

InventoryPresetItemUpdateErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetItemUpdateErrorMessage(output);
};

InventoryPresetItemUpdateErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetItemUpdateErrorMessage(input);
};

InventoryPresetItemUpdateErrorMessage.prototype.serializeAs_InventoryPresetItemUpdateErrorMessage = function(param1) {
    param1.writeByte(this.code);
};

InventoryPresetItemUpdateErrorMessage.prototype.deserializeAs_InventoryPresetItemUpdateErrorMessage = function(param1) {
    this.code = param1.readByte();
    if (this.code < 0) {
        throw new Error("Forbidden value (" + this.code + ") on element of InventoryPresetItemUpdateErrorMessage.code.");
    } else {
        return;
    }
};

InventoryPresetItemUpdateErrorMessage.prototype.getMessageId = function() {
    return 6211;
};

InventoryPresetItemUpdateErrorMessage.prototype.getClassName = function() {
    return 'InventoryPresetItemUpdateErrorMessage';
};

module.exports.id = 6211;
module.exports.InventoryPresetItemUpdateErrorMessage = InventoryPresetItemUpdateErrorMessage;