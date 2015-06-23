var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdolSelectErrorMessage = function() {
    this.reason = 0;
    this.idolId = 0;
    this.activate = false;
    this.party = false;
};

require('util').inherits(IdolSelectErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolSelectErrorMessage();
};

IdolSelectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolSelectErrorMessage(output);
};

IdolSelectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolSelectErrorMessage(input);
};

IdolSelectErrorMessage.prototype.serializeAs_IdolSelectErrorMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.activate);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.party);
    param1.writeByte(_loc2_);
    param1.writeByte(this.reason);
    if (this.idolId < 0) {
        throw new Error("Forbidden value (" + this.idolId + ") on element idolId.");
    } else {
        param1.writeVarShort(this.idolId);
        return;
    }
};

IdolSelectErrorMessage.prototype.deserializeAs_IdolSelectErrorMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of IdolSelectErrorMessage.reason.");
    } else {
        this.idolId = param1.readVarUhShort();
        if (this.idolId < 0) {
            throw new Error("Forbidden value (" + this.idolId + ") on element of IdolSelectErrorMessage.idolId.");
        } else {
            return;
        }
    }
};

IdolSelectErrorMessage.prototype.getMessageId = function() {
    return 6584;
};

IdolSelectErrorMessage.prototype.getClassName = function() {
    return 'IdolSelectErrorMessage';
};

module.exports.id = 6584;
module.exports.IdolSelectErrorMessage = IdolSelectErrorMessage;