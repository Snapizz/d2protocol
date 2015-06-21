var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectUseOnCellMessage = module.exports = function() {
    this.cells = 0;

    return this;
};

require('util').inherits(ObjectUseOnCellMessage, require('./object-use-message.js'));

ObjectUseOnCellMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectUseOnCellMessage(output);
};

ObjectUseOnCellMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectUseOnCellMessage(input);
};

ObjectUseOnCellMessage.prototype.serializeAs_ObjectUseOnCellMessage = function(param1) {
    this.serializeAs_ObjectUseMessage(param1);
    if (this.cells < 0 || this.cells > 559) {
        throw new Error("Forbidden value (" + this.cells + ") on element cells.");
    } else {
        param1.writeVarShort(this.cells);
        return;
    }
};

ObjectUseOnCellMessage.prototype.deserializeAs_ObjectUseOnCellMessage = function(param1) {
    this.deserializeAs_ObjectUseMessage(param1);
    this.cells = param1.readVarUhShort();
    if (this.cells < 0 || this.cells > 559) {
        throw new Error("Forbidden value (" + this.cells + ") on element of ObjectUseOnCellMessage.cells.");
    } else {
        return;
    }
};

ObjectUseOnCellMessage.prototype.getMessageId = function() {
    return 3013;
};

ObjectUseOnCellMessage.prototype.getClassName = function() {
    return 'ObjectUseOnCellMessage';
};

module.exports.id = 3013;