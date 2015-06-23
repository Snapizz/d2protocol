var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdolPartyLostMessage = function() {
    this.idolId = 0;
};

require('util').inherits(IdolPartyLostMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolPartyLostMessage();
};

IdolPartyLostMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolPartyLostMessage(output);
};

IdolPartyLostMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolPartyLostMessage(input);
};

IdolPartyLostMessage.prototype.serializeAs_IdolPartyLostMessage = function(param1) {
    if (this.idolId < 0) {
        throw new Error("Forbidden value (" + this.idolId + ") on element idolId.");
    } else {
        param1.writeVarShort(this.idolId);
        return;
    }
};

IdolPartyLostMessage.prototype.deserializeAs_IdolPartyLostMessage = function(param1) {
    this.idolId = param1.readVarUhShort();
    if (this.idolId < 0) {
        throw new Error("Forbidden value (" + this.idolId + ") on element of IdolPartyLostMessage.idolId.");
    } else {
        return;
    }
};

IdolPartyLostMessage.prototype.getMessageId = function() {
    return 6580;
};

IdolPartyLostMessage.prototype.getClassName = function() {
    return 'IdolPartyLostMessage';
};

module.exports.id = 6580;
module.exports.IdolPartyLostMessage = IdolPartyLostMessage;