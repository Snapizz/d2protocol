var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var Version = require('../../types/version/version.js').class;

var IdentificationFailedForBadVersionMessage = module.exports = function() {
    this.requiredVersion = new Version();

    return this;
};

require('util').inherits(IdentificationFailedForBadVersionMessage, require('./identification-failed-message.js'));

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