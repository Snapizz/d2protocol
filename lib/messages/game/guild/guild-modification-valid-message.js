var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').GuildEmblem;

var GuildModificationValidMessage = function() {
    this.guildName = "";
    this.guildEmblem = new GuildEmblem();
};

require('util').inherits(GuildModificationValidMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildModificationValidMessage();
};

GuildModificationValidMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildModificationValidMessage(output);
};

GuildModificationValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildModificationValidMessage(input);
};

GuildModificationValidMessage.prototype.serializeAs_GuildModificationValidMessage = function(param1) {
    param1.writeUTF(this.guildName);
    this.guildEmblem.serializeAs_GuildEmblem(param1);
};

GuildModificationValidMessage.prototype.deserializeAs_GuildModificationValidMessage = function(param1) {
    this.guildName = param1.readUTF();
    this.guildEmblem = new GuildEmblem();
    this.guildEmblem.deserialize(param1);
};

GuildModificationValidMessage.prototype.getMessageId = function() {
    return 6323;
};

GuildModificationValidMessage.prototype.getClassName = function() {
    return 'GuildModificationValidMessage';
};

module.exports.id = 6323;
module.exports.GuildModificationValidMessage = GuildModificationValidMessage;