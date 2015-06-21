var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildInformations = require('../../../../../../types/game/context/roleplay/guild-informations.js').class;

var HouseGuildRightsMessage = function() {
    this.houseId = 0;
    this.guildInfo = new GuildInformations();
    this.rights = 0;
};

require('util').inherits(HouseGuildRightsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new HouseGuildRightsMessage();
};

HouseGuildRightsMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseGuildRightsMessage(output);
};

HouseGuildRightsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseGuildRightsMessage(input);
};

HouseGuildRightsMessage.prototype.serializeAs_HouseGuildRightsMessage = function(param1) {
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
    } else {
        param1.writeVarInt(this.houseId);
        this.guildInfo.serializeAs_GuildInformations(param1);
        if (this.rights < 0) {
            throw new Error("Forbidden value (" + this.rights + ") on element rights.");
        } else {
            param1.writeVarInt(this.rights);
            return;
        }
    }
};

HouseGuildRightsMessage.prototype.deserializeAs_HouseGuildRightsMessage = function(param1) {
    this.houseId = param1.readVarUhInt();
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildRightsMessage.houseId.");
    } else {
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error("Forbidden value (" + this.rights + ") on element of HouseGuildRightsMessage.rights.");
        } else {
            return;
        }
    }
};

HouseGuildRightsMessage.prototype.getMessageId = function() {
    return 5703;
};

HouseGuildRightsMessage.prototype.getClassName = function() {
    return 'HouseGuildRightsMessage';
};

module.exports.id = 5703;
module.exports.HouseGuildRightsMessage = HouseGuildRightsMessage;