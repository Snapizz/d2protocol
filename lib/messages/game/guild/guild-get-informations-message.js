var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildGetInformationsMessage = function() {
    this.infoType = 0;
};

require('util').inherits(GuildGetInformationsMessage, d2com.NetworkMessage.class);

GuildGetInformationsMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildGetInformationsMessage(output);
};

GuildGetInformationsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildGetInformationsMessage(input);
};

GuildGetInformationsMessage.prototype.serializeAs_GuildGetInformationsMessage = function(param1) {
    param1.writeByte(this.infoType);
};

GuildGetInformationsMessage.prototype.deserializeAs_GuildGetInformationsMessage = function(param1) {
    this.infoType = param1.readByte();
    if (this.infoType < 0) {
        throw new Error("Forbidden value (" + this.infoType + ") on element of GuildGetInformationsMessage.infoType.");
    } else {
        return;
    }
};

GuildGetInformationsMessage.prototype.getMessageId = function() {
    return 5550;
};

GuildGetInformationsMessage.prototype.getClassName = function() {
    return 'GuildGetInformationsMessage';
};

module.exports.id = 5550;
module.exports.class = GuildGetInformationsMessage;
module.exports.getInstance = function() {
    return new GuildGetInformationsMessage;
};