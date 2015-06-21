var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TitleSelectedMessage = module.exports = function() {
    this.titleId = 0;

    return this;
};

require('util').inherits(TitleSelectedMessage, d2com.NetworkMessage.class);

TitleSelectedMessage.prototype.serialize = function(output) {
    this.serializeAs_TitleSelectedMessage(output);
};

TitleSelectedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TitleSelectedMessage(input);
};

TitleSelectedMessage.prototype.serializeAs_TitleSelectedMessage = function(param1) {
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
    } else {
        param1.writeVarShort(this.titleId);
        return;
    }
};

TitleSelectedMessage.prototype.deserializeAs_TitleSelectedMessage = function(param1) {
    this.titleId = param1.readVarUhShort();
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element of TitleSelectedMessage.titleId.");
    } else {
        return;
    }
};

TitleSelectedMessage.prototype.getMessageId = function() {
    return 6366;
};

TitleSelectedMessage.prototype.getClassName = function() {
    return 'TitleSelectedMessage';
};

module.exports.id = 6366;