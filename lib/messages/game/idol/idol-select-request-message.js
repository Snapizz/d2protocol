var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdolSelectRequestMessage = function() {
    this.idolId = 0;
    this.activate = false;
    this.party = false;
};

require('util').inherits(IdolSelectRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolSelectRequestMessage();
};

IdolSelectRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolSelectRequestMessage(output);
};

IdolSelectRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolSelectRequestMessage(input);
};

IdolSelectRequestMessage.prototype.serializeAs_IdolSelectRequestMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.activate);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.party);
    param1.writeByte(_loc2_);
    if (this.idolId < 0) {
        throw new Error("Forbidden value (" + this.idolId + ") on element idolId.");
    } else {
        param1.writeVarShort(this.idolId);
        return;
    }
};

IdolSelectRequestMessage.prototype.deserializeAs_IdolSelectRequestMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.idolId = param1.readVarUhShort();
    if (this.idolId < 0) {
        throw new Error("Forbidden value (" + this.idolId + ") on element of IdolSelectRequestMessage.idolId.");
    } else {
        return;
    }
};

IdolSelectRequestMessage.prototype.getMessageId = function() {
    return 6587;
};

IdolSelectRequestMessage.prototype.getClassName = function() {
    return 'IdolSelectRequestMessage';
};

module.exports.id = 6587;
module.exports.IdolSelectRequestMessage = IdolSelectRequestMessage;