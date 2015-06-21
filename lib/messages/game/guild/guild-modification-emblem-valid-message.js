var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var GuildModificationEmblemValidMessage = module.exports = function() {
    this.guildEmblem = new GuildEmblem();

    return this;
};

require('util').inherits(GuildModificationEmblemValidMessage, d2com.NetworkMessage.class);

GuildModificationEmblemValidMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildModificationEmblemValidMessage(output);
};

GuildModificationEmblemValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildModificationEmblemValidMessage(input);
};

GuildModificationEmblemValidMessage.prototype.serializeAs_GuildModificationEmblemValidMessage = function(param1) {
    this.guildEmblem.serializeAs_GuildEmblem(param1);
};

GuildModificationEmblemValidMessage.prototype.deserializeAs_GuildModificationEmblemValidMessage = function(param1) {
    this.guildEmblem = new GuildEmblem();
    this.guildEmblem.deserialize(param1);
};

GuildModificationEmblemValidMessage.prototype.getMessageId = function() {
    return 6328;
};

GuildModificationEmblemValidMessage.prototype.getClassName = function() {
    return 'GuildModificationEmblemValidMessage';
};

module.exports.id = 6328;