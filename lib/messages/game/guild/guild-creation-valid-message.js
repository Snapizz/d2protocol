var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var GuildCreationValidMessage = function() {
    this.guildName = "";
    this.guildEmblem = new GuildEmblem();
};

require('util').inherits(GuildCreationValidMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildCreationValidMessage();
};

GuildCreationValidMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildCreationValidMessage(output);
};

GuildCreationValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildCreationValidMessage(input);
};

GuildCreationValidMessage.prototype.serializeAs_GuildCreationValidMessage = function(param1) {
    param1.writeUTF(this.guildName);
    this.guildEmblem.serializeAs_GuildEmblem(param1);
};

GuildCreationValidMessage.prototype.deserializeAs_GuildCreationValidMessage = function(param1) {
    this.guildName = param1.readUTF();
    this.guildEmblem = new GuildEmblem();
    this.guildEmblem.deserialize(param1);
};

GuildCreationValidMessage.prototype.getMessageId = function() {
    return 5546;
};

GuildCreationValidMessage.prototype.getClassName = function() {
    return 'GuildCreationValidMessage';
};

module.exports.id = 5546;
module.exports.GuildCreationValidMessage = GuildCreationValidMessage;