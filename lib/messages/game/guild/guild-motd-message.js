var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildMotdMessage = function() {
    this.content = "";
    this.timestamp = 0;
};

require('util').inherits(GuildMotdMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildMotdMessage();
};

GuildMotdMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildMotdMessage(output);
};

GuildMotdMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildMotdMessage(input);
};

GuildMotdMessage.prototype.serializeAs_GuildMotdMessage = function(param1) {
    param1.writeUTF(this.content);
    if (this.timestamp < 0) {
        throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
    } else {
        param1.writeInt(this.timestamp);
        return;
    }
};

GuildMotdMessage.prototype.deserializeAs_GuildMotdMessage = function(param1) {
    this.content = param1.readUTF();
    this.timestamp = param1.readInt();
    if (this.timestamp < 0) {
        throw new Error("Forbidden value (" + this.timestamp + ") on element of GuildMotdMessage.timestamp.");
    } else {
        return;
    }
};

GuildMotdMessage.prototype.getMessageId = function() {
    return 6590;
};

GuildMotdMessage.prototype.getClassName = function() {
    return 'GuildMotdMessage';
};

module.exports.id = 6590;
module.exports.GuildMotdMessage = GuildMotdMessage;