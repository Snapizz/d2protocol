var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ItemNoMoreAvailableMessage = module.exports = function() {


    return this;
};

require('util').inherits(ItemNoMoreAvailableMessage, d2com.NetworkMessage.class);

ItemNoMoreAvailableMessage.prototype.serialize = function(output) {
    this.serializeAs_ItemNoMoreAvailableMessage(output);
};

ItemNoMoreAvailableMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ItemNoMoreAvailableMessage(input);
};

ItemNoMoreAvailableMessage.prototype.serializeAs_ItemNoMoreAvailableMessage = function(param1) {

};

ItemNoMoreAvailableMessage.prototype.deserializeAs_ItemNoMoreAvailableMessage = function(param1) {

};

ItemNoMoreAvailableMessage.prototype.getMessageId = function() {
    return 5769;
};

ItemNoMoreAvailableMessage.prototype.getClassName = function() {
    return 'ItemNoMoreAvailableMessage';
};

module.exports.id = 5769;