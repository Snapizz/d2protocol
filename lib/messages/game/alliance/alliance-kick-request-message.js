var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceKickRequestMessage = function() {
    this.kickedId = 0;
};

require('util').inherits(AllianceKickRequestMessage, d2com.NetworkMessage.class);

AllianceKickRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceKickRequestMessage(output);
};

AllianceKickRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceKickRequestMessage(input);
};

AllianceKickRequestMessage.prototype.serializeAs_AllianceKickRequestMessage = function(param1) {
    if (this.kickedId < 0) {
        throw new Error("Forbidden value (" + this.kickedId + ") on element kickedId.");
    } else {
        param1.writeVarInt(this.kickedId);
        return;
    }
};

AllianceKickRequestMessage.prototype.deserializeAs_AllianceKickRequestMessage = function(param1) {
    this.kickedId = param1.readVarUhInt();
    if (this.kickedId < 0) {
        throw new Error("Forbidden value (" + this.kickedId + ") on element of AllianceKickRequestMessage.kickedId.");
    } else {
        return;
    }
};

AllianceKickRequestMessage.prototype.getMessageId = function() {
    return 6400;
};

AllianceKickRequestMessage.prototype.getClassName = function() {
    return 'AllianceKickRequestMessage';
};

module.exports.id = 6400;
module.exports.class = AllianceKickRequestMessage;
module.exports.getInstance = function() {
    return new AllianceKickRequestMessage;
};