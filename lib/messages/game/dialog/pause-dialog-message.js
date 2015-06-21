var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PauseDialogMessage = function() {
    this.dialogType = 0;
};

require('util').inherits(PauseDialogMessage, d2com.NetworkMessage.class);

PauseDialogMessage.prototype.serialize = function(output) {
    this.serializeAs_PauseDialogMessage(output);
};

PauseDialogMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PauseDialogMessage(input);
};

PauseDialogMessage.prototype.serializeAs_PauseDialogMessage = function(param1) {
    param1.writeByte(this.dialogType);
};

PauseDialogMessage.prototype.deserializeAs_PauseDialogMessage = function(param1) {
    this.dialogType = param1.readByte();
    if (this.dialogType < 0) {
        throw new Error("Forbidden value (" + this.dialogType + ") on element of PauseDialogMessage.dialogType.");
    } else {
        return;
    }
};

PauseDialogMessage.prototype.getMessageId = function() {
    return 6012;
};

PauseDialogMessage.prototype.getClassName = function() {
    return 'PauseDialogMessage';
};

module.exports.id = 6012;
module.exports.class = PauseDialogMessage;
module.exports.getInstance = function() {
    return new PauseDialogMessage;
};