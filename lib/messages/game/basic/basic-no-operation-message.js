var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicNoOperationMessage = function() {

};

require('util').inherits(BasicNoOperationMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new BasicNoOperationMessage();
};

BasicNoOperationMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicNoOperationMessage(output);
};

BasicNoOperationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicNoOperationMessage(input);
};

BasicNoOperationMessage.prototype.serializeAs_BasicNoOperationMessage = function(param1) {

};

BasicNoOperationMessage.prototype.deserializeAs_BasicNoOperationMessage = function(param1) {

};

BasicNoOperationMessage.prototype.getMessageId = function() {
    return 176;
};

BasicNoOperationMessage.prototype.getClassName = function() {
    return 'BasicNoOperationMessage';
};

module.exports.id = 176;
module.exports.BasicNoOperationMessage = BasicNoOperationMessage;