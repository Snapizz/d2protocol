var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildLeftMessage = function() {

};

require('util').inherits(GuildLeftMessage, d2com.NetworkMessage.class);

GuildLeftMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildLeftMessage(output);
};

GuildLeftMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildLeftMessage(input);
};

GuildLeftMessage.prototype.serializeAs_GuildLeftMessage = function(param1) {

};

GuildLeftMessage.prototype.deserializeAs_GuildLeftMessage = function(param1) {

};

GuildLeftMessage.prototype.getMessageId = function() {
    return 5562;
};

GuildLeftMessage.prototype.getClassName = function() {
    return 'GuildLeftMessage';
};

module.exports.id = 5562;
module.exports.class = GuildLeftMessage;
module.exports.getInstance = function() {
    return new GuildLeftMessage;
};