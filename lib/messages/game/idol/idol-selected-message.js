var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdolSelectedMessage = function() {
    this.idolId = 0;
    this.activate = false;
    this.party = false;
};

require('util').inherits(IdolSelectedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolSelectedMessage();
};

IdolSelectedMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolSelectedMessage(output);
};

IdolSelectedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolSelectedMessage(input);
};

IdolSelectedMessage.prototype.serializeAs_IdolSelectedMessage = function(param1) {
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

IdolSelectedMessage.prototype.deserializeAs_IdolSelectedMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.activate = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.party = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.idolId = param1.readVarUhShort();
    if (this.idolId < 0) {
        throw new Error("Forbidden value (" + this.idolId + ") on element of IdolSelectedMessage.idolId.");
    } else {
        return;
    }
};

IdolSelectedMessage.prototype.getMessageId = function() {
    return 6581;
};

IdolSelectedMessage.prototype.getClassName = function() {
    return 'IdolSelectedMessage';
};

module.exports.id = 6581;
module.exports.IdolSelectedMessage = IdolSelectedMessage;