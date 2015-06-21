var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var HouseInformationsForGuild = require('../../../types/game/house/house-informations-for-guild.js').class;

var GuildHouseUpdateInformationMessage = function() {
    this.housesInformations = new HouseInformationsForGuild();
};

require('util').inherits(GuildHouseUpdateInformationMessage, d2com.NetworkMessage.class);

GuildHouseUpdateInformationMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildHouseUpdateInformationMessage(output);
};

GuildHouseUpdateInformationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildHouseUpdateInformationMessage(input);
};

GuildHouseUpdateInformationMessage.prototype.serializeAs_GuildHouseUpdateInformationMessage = function(param1) {
    this.housesInformations.serializeAs_HouseInformationsForGuild(param1);
};

GuildHouseUpdateInformationMessage.prototype.deserializeAs_GuildHouseUpdateInformationMessage = function(param1) {
    this.housesInformations = new HouseInformationsForGuild();
    this.housesInformations.deserialize(param1);
};

GuildHouseUpdateInformationMessage.prototype.getMessageId = function() {
    return 6181;
};

GuildHouseUpdateInformationMessage.prototype.getClassName = function() {
    return 'GuildHouseUpdateInformationMessage';
};

module.exports.id = 6181;
module.exports.class = GuildHouseUpdateInformationMessage;
module.exports.getInstance = function() {
    return new GuildHouseUpdateInformationMessage;
};