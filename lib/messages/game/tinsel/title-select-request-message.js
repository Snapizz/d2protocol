var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TitleSelectRequestMessage = module.exports = function() {
    this.titleId = 0;

    return this;
};

require('util').inherits(TitleSelectRequestMessage, d2com.NetworkMessage.class);

TitleSelectRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_TitleSelectRequestMessage(output);
};

TitleSelectRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TitleSelectRequestMessage(input);
};

TitleSelectRequestMessage.prototype.serializeAs_TitleSelectRequestMessage = function(param1) {
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
    } else {
        param1.writeVarShort(this.titleId);
        return;
    }
};

TitleSelectRequestMessage.prototype.deserializeAs_TitleSelectRequestMessage = function(param1) {
    this.titleId = param1.readVarUhShort();
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element of TitleSelectRequestMessage.titleId.");
    } else {
        return;
    }
};

TitleSelectRequestMessage.prototype.getMessageId = function() {
    return 6365;
};

TitleSelectRequestMessage.prototype.getClassName = function() {
    return 'TitleSelectRequestMessage';
};

module.exports.id = 6365;