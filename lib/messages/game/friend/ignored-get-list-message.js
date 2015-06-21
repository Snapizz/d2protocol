var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var IgnoredGetListMessage = module.exports = function() {


    return this;
};

require('util').inherits(IgnoredGetListMessage, d2com.NetworkMessage.class);

IgnoredGetListMessage.prototype.serialize = function(output) {
    this.serializeAs_IgnoredGetListMessage(output);
};

IgnoredGetListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IgnoredGetListMessage(input);
};

IgnoredGetListMessage.prototype.serializeAs_IgnoredGetListMessage = function(param1) {

};

IgnoredGetListMessage.prototype.deserializeAs_IgnoredGetListMessage = function(param1) {

};

IgnoredGetListMessage.prototype.getMessageId = function() {
    return 5676;
};

IgnoredGetListMessage.prototype.getClassName = function() {
    return 'IgnoredGetListMessage';
};

module.exports.id = 5676;