var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IdentificationFailedBannedMessage = function() {
    this.banEndDate = 0;
};

require('util').inherits(IdentificationFailedBannedMessage, require('./identification-failed-message.js').IdentificationFailedMessage);

module.exports = function() {
    return new IdentificationFailedBannedMessage();
};

IdentificationFailedBannedMessage.prototype.serialize = function(output) {
    this.serializeAs_IdentificationFailedBannedMessage(output);
};

IdentificationFailedBannedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdentificationFailedBannedMessage(input);
};

IdentificationFailedBannedMessage.prototype.serializeAs_IdentificationFailedBannedMessage = function(param1) {
    this.serializeAs_IdentificationFailedMessage(param1);
    if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.banEndDate + ") on element banEndDate.");
    } else {
        param1.writeDouble(this.banEndDate);
        return;
    }
};

IdentificationFailedBannedMessage.prototype.deserializeAs_IdentificationFailedBannedMessage = function(param1) {
    this.deserializeAs_IdentificationFailedMessage(param1);
    this.banEndDate = param1.readDouble();
    if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.banEndDate + ") on element of IdentificationFailedBannedMessage.banEndDate.");
    } else {
        return;
    }
};

IdentificationFailedBannedMessage.prototype.getMessageId = function() {
    return 6174;
};

IdentificationFailedBannedMessage.prototype.getClassName = function() {
    return 'IdentificationFailedBannedMessage';
};

module.exports.id = 6174;
module.exports.IdentificationFailedBannedMessage = IdentificationFailedBannedMessage;