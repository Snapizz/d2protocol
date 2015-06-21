var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildFightTakePlaceRequestMessage = function() {
    this.replacedCharacterId = 0;
};

require('util').inherits(GuildFightTakePlaceRequestMessage, require('./guild-fight-join-request-message.js'));

module.exports = function() {
    return new GuildFightTakePlaceRequestMessage();
};

GuildFightTakePlaceRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFightTakePlaceRequestMessage(output);
};

GuildFightTakePlaceRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFightTakePlaceRequestMessage(input);
};

GuildFightTakePlaceRequestMessage.prototype.serializeAs_GuildFightTakePlaceRequestMessage = function(param1) {
    this.serializeAs_GuildFightJoinRequestMessage(param1);
    param1.writeInt(this.replacedCharacterId);
};

GuildFightTakePlaceRequestMessage.prototype.deserializeAs_GuildFightTakePlaceRequestMessage = function(param1) {
    this.deserializeAs_GuildFightJoinRequestMessage(param1);
    this.replacedCharacterId = param1.readInt();
};

GuildFightTakePlaceRequestMessage.prototype.getMessageId = function() {
    return 6235;
};

GuildFightTakePlaceRequestMessage.prototype.getClassName = function() {
    return 'GuildFightTakePlaceRequestMessage';
};

module.exports.id = 6235;
module.exports.GuildFightTakePlaceRequestMessage = GuildFightTakePlaceRequestMessage;