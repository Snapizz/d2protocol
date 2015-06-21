var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceCreationResultMessage = function() {
    this.result = 0;
};

require('util').inherits(AllianceCreationResultMessage, d2com.NetworkMessage.class);

AllianceCreationResultMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceCreationResultMessage(output);
};

AllianceCreationResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceCreationResultMessage(input);
};

AllianceCreationResultMessage.prototype.serializeAs_AllianceCreationResultMessage = function(param1) {
    param1.writeByte(this.result);
};

AllianceCreationResultMessage.prototype.deserializeAs_AllianceCreationResultMessage = function(param1) {
    this.result = param1.readByte();
    if (this.result < 0) {
        throw new Error("Forbidden value (" + this.result + ") on element of AllianceCreationResultMessage.result.");
    } else {
        return;
    }
};

AllianceCreationResultMessage.prototype.getMessageId = function() {
    return 6391;
};

AllianceCreationResultMessage.prototype.getClassName = function() {
    return 'AllianceCreationResultMessage';
};

module.exports.id = 6391;
module.exports.class = AllianceCreationResultMessage;
module.exports.getInstance = function() {
    return new AllianceCreationResultMessage;
};