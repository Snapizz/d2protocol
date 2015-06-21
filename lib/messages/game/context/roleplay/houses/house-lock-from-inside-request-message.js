var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseLockFromInsideRequestMessage = function() {

};

require('util').inherits(HouseLockFromInsideRequestMessage, require('../lockable/lockable-change-code-message.js'));

module.exports = function() {
    return new HouseLockFromInsideRequestMessage();
};

HouseLockFromInsideRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseLockFromInsideRequestMessage(output);
};

HouseLockFromInsideRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseLockFromInsideRequestMessage(input);
};

HouseLockFromInsideRequestMessage.prototype.serializeAs_HouseLockFromInsideRequestMessage = function(param1) {
    this.serializeAs_LockableChangeCodeMessage(param1);
};

HouseLockFromInsideRequestMessage.prototype.deserializeAs_HouseLockFromInsideRequestMessage = function(param1) {
    this.deserializeAs_LockableChangeCodeMessage(param1);
};

HouseLockFromInsideRequestMessage.prototype.getMessageId = function() {
    return 5885;
};

HouseLockFromInsideRequestMessage.prototype.getClassName = function() {
    return 'HouseLockFromInsideRequestMessage';
};

module.exports.id = 5885;
module.exports.HouseLockFromInsideRequestMessage = HouseLockFromInsideRequestMessage;