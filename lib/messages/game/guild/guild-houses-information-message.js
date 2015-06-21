var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var HouseInformationsForGuild = require('../../../types/game/house/house-informations-for-guild.js').class;

var GuildHousesInformationMessage = function() {
    this.housesInformations = [];
};

require('util').inherits(GuildHousesInformationMessage, d2com.NetworkMessage.class);

GuildHousesInformationMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildHousesInformationMessage(output);
};

GuildHousesInformationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildHousesInformationMessage(input);
};

GuildHousesInformationMessage.prototype.serializeAs_GuildHousesInformationMessage = function(param1) {
    param1.writeShort(this.housesInformations.length);
    var _loc2_ = 0;
    while (_loc2_ < this.housesInformations.length) {
        (this.housesInformations[_loc2_]).serializeAs_HouseInformationsForGuild(param1);
        _loc2_++;
    }
};

GuildHousesInformationMessage.prototype.deserializeAs_GuildHousesInformationMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new HouseInformationsForGuild();
        _loc4_.deserialize(param1);
        this.housesInformations.push(_loc4_);
        _loc3_++;
    }
};

GuildHousesInformationMessage.prototype.getMessageId = function() {
    return 5919;
};

GuildHousesInformationMessage.prototype.getClassName = function() {
    return 'GuildHousesInformationMessage';
};

module.exports.id = 5919;
module.exports.class = GuildHousesInformationMessage;
module.exports.getInstance = function() {
    return new GuildHousesInformationMessage;
};