var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var SpellForgetUIMessage = function() {
    this.open = false;
};

require('util').inherits(SpellForgetUIMessage, d2com.NetworkMessage.class);

SpellForgetUIMessage.prototype.serialize = function(output) {
    this.serializeAs_SpellForgetUIMessage(output);
};

SpellForgetUIMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpellForgetUIMessage(input);
};

SpellForgetUIMessage.prototype.serializeAs_SpellForgetUIMessage = function(param1) {
    param1.writeBoolean(this.open);
};

SpellForgetUIMessage.prototype.deserializeAs_SpellForgetUIMessage = function(param1) {
    this.open = param1.readBoolean();
};

SpellForgetUIMessage.prototype.getMessageId = function() {
    return 5565;
};

SpellForgetUIMessage.prototype.getClassName = function() {
    return 'SpellForgetUIMessage';
};

module.exports.id = 5565;
module.exports.class = SpellForgetUIMessage;
module.exports.getInstance = function() {
    return new SpellForgetUIMessage;
};