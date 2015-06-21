var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CinematicMessage = function() {
    this.cinematicId = 0;
};

require('util').inherits(CinematicMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new CinematicMessage();
};

CinematicMessage.prototype.serialize = function(output) {
    this.serializeAs_CinematicMessage(output);
};

CinematicMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CinematicMessage(input);
};

CinematicMessage.prototype.serializeAs_CinematicMessage = function(param1) {
    if (this.cinematicId < 0) {
        throw new Error("Forbidden value (" + this.cinematicId + ") on element cinematicId.");
    } else {
        param1.writeVarShort(this.cinematicId);
        return;
    }
};

CinematicMessage.prototype.deserializeAs_CinematicMessage = function(param1) {
    this.cinematicId = param1.readVarUhShort();
    if (this.cinematicId < 0) {
        throw new Error("Forbidden value (" + this.cinematicId + ") on element of CinematicMessage.cinematicId.");
    } else {
        return;
    }
};

CinematicMessage.prototype.getMessageId = function() {
    return 6053;
};

CinematicMessage.prototype.getClassName = function() {
    return 'CinematicMessage';
};

module.exports.id = 6053;
module.exports.CinematicMessage = CinematicMessage;