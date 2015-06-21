var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismSettingsErrorMessage = module.exports = function() {


    return this;
};

require('util').inherits(PrismSettingsErrorMessage, d2com.NetworkMessage.class);

PrismSettingsErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismSettingsErrorMessage(output);
};

PrismSettingsErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismSettingsErrorMessage(input);
};

PrismSettingsErrorMessage.prototype.serializeAs_PrismSettingsErrorMessage = function(param1) {

};

PrismSettingsErrorMessage.prototype.deserializeAs_PrismSettingsErrorMessage = function(param1) {

};

PrismSettingsErrorMessage.prototype.getMessageId = function() {
    return 6442;
};

PrismSettingsErrorMessage.prototype.getClassName = function() {
    return 'PrismSettingsErrorMessage';
};

module.exports.id = 6442;