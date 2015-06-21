var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var Version = require('../../types/version/version.js').class;

var IdentificationFailedForBadVersionMessage = function() {
    this.requiredVersion = new Version();
};

require('util').inherits(IdentificationFailedForBadVersionMessage, require('./identification-failed-message.js').class);

IdentificationFailedForBadVersionMessage.prototype.serialize = function(output) {
    this.serializeAs_IdentificationFailedForBadVersionMessage(output);
};

IdentificationFailedForBadVersionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdentificationFailedForBadVersionMessage(input);
};

IdentificationFailedForBadVersionMessage.prototype.serializeAs_IdentificationFailedForBadVersionMessage = function(param1) {
    this.serializeAs_IdentificationFailedMessage(param1);
    this.requiredVersion.serializeAs_Version(param1);
};

IdentificationFailedForBadVersionMessage.prototype.deserializeAs_IdentificationFailedForBadVersionMessage = function(param1) {
    this.deserializeAs_IdentificationFailedMessage(param1);
    this.requiredVersion = new Version();
    this.requiredVersion.deserialize(param1);
};

IdentificationFailedForBadVersionMessage.prototype.getMessageId = function() {
    return 21;
};

IdentificationFailedForBadVersionMessage.prototype.getClassName = function() {
    return 'IdentificationFailedForBadVersionMessage';
};

module.exports.id = 21;
module.exports.class = IdentificationFailedForBadVersionMessage;
module.exports.getInstance = function() {
    return new IdentificationFailedForBadVersionMessage;
};