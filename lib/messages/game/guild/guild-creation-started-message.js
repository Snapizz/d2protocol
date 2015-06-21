var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildCreationStartedMessage = module.exports = function() {


    return this;
};

require('util').inherits(GuildCreationStartedMessage, d2com.NetworkMessage.class);

GuildCreationStartedMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildCreationStartedMessage(output);
};

GuildCreationStartedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildCreationStartedMessage(input);
};

GuildCreationStartedMessage.prototype.serializeAs_GuildCreationStartedMessage = function(param1) {

};

GuildCreationStartedMessage.prototype.deserializeAs_GuildCreationStartedMessage = function(param1) {

};

GuildCreationStartedMessage.prototype.getMessageId = function() {
    return 5920;
};

GuildCreationStartedMessage.prototype.getClassName = function() {
    return 'GuildCreationStartedMessage';
};

module.exports.id = 5920;