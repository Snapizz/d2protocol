var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var SpellUpgradeFailureMessage = function() {

};

require('util').inherits(SpellUpgradeFailureMessage, d2com.NetworkMessage.class);

SpellUpgradeFailureMessage.prototype.serialize = function(output) {
    this.serializeAs_SpellUpgradeFailureMessage(output);
};

SpellUpgradeFailureMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpellUpgradeFailureMessage(input);
};

SpellUpgradeFailureMessage.prototype.serializeAs_SpellUpgradeFailureMessage = function(param1) {

};

SpellUpgradeFailureMessage.prototype.deserializeAs_SpellUpgradeFailureMessage = function(param1) {

};

SpellUpgradeFailureMessage.prototype.getMessageId = function() {
    return 1202;
};

SpellUpgradeFailureMessage.prototype.getClassName = function() {
    return 'SpellUpgradeFailureMessage';
};

module.exports.id = 1202;
module.exports.class = SpellUpgradeFailureMessage;
module.exports.getInstance = function() {
    return new SpellUpgradeFailureMessage;
};