var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var TitleLostMessage = function() {
    this.titleId = 0;
};

require('util').inherits(TitleLostMessage, d2com.NetworkMessage.class);

TitleLostMessage.prototype.serialize = function(output) {
    this.serializeAs_TitleLostMessage(output);
};

TitleLostMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TitleLostMessage(input);
};

TitleLostMessage.prototype.serializeAs_TitleLostMessage = function(param1) {
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
    } else {
        param1.writeVarShort(this.titleId);
        return;
    }
};

TitleLostMessage.prototype.deserializeAs_TitleLostMessage = function(param1) {
    this.titleId = param1.readVarUhShort();
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element of TitleLostMessage.titleId.");
    } else {
        return;
    }
};

TitleLostMessage.prototype.getMessageId = function() {
    return 6371;
};

TitleLostMessage.prototype.getClassName = function() {
    return 'TitleLostMessage';
};

module.exports.id = 6371;
module.exports.class = TitleLostMessage;
module.exports.getInstance = function() {
    return new TitleLostMessage;
};