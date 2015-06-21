var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LockableShowCodeDialogMessage = module.exports = function() {
    this.changeOrUse = false;
    this.codeSize = 0;

    return this;
};

require('util').inherits(LockableShowCodeDialogMessage, d2com.NetworkMessage.class);

LockableShowCodeDialogMessage.prototype.serialize = function(output) {
    this.serializeAs_LockableShowCodeDialogMessage(output);
};

LockableShowCodeDialogMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LockableShowCodeDialogMessage(input);
};

LockableShowCodeDialogMessage.prototype.serializeAs_LockableShowCodeDialogMessage = function(param1) {
    param1.writeBoolean(this.changeOrUse);
    if (this.codeSize < 0) {
        throw new Error("Forbidden value (" + this.codeSize + ") on element codeSize.");
    } else {
        param1.writeByte(this.codeSize);
        return;
    }
};

LockableShowCodeDialogMessage.prototype.deserializeAs_LockableShowCodeDialogMessage = function(param1) {
    this.changeOrUse = param1.readBoolean();
    this.codeSize = param1.readByte();
    if (this.codeSize < 0) {
        throw new Error("Forbidden value (" + this.codeSize + ") on element of LockableShowCodeDialogMessage.codeSize.");
    } else {
        return;
    }
};

LockableShowCodeDialogMessage.prototype.getMessageId = function() {
    return 5740;
};

LockableShowCodeDialogMessage.prototype.getClassName = function() {
    return 'LockableShowCodeDialogMessage';
};

module.exports.id = 5740;