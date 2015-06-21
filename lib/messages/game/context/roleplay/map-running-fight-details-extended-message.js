var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var NamedPartyTeam = require('../../../../types/game/context/roleplay/party/named-party-team.js').NamedPartyTeam;
var GameFightFighterLightInformations = require('../../../../types/game/context/fight/game-fight-fighter-light-informations.js').GameFightFighterLightInformations;

var MapRunningFightDetailsExtendedMessage = function() {
    this.namedPartyTeams = [];
};

require('util').inherits(MapRunningFightDetailsExtendedMessage, require('./map-running-fight-details-message.js').MapRunningFightDetailsMessage);

module.exports = function() {
    return new MapRunningFightDetailsExtendedMessage();
};

MapRunningFightDetailsExtendedMessage.prototype.serialize = function(output) {
    this.serializeAs_MapRunningFightDetailsExtendedMessage(output);
};

MapRunningFightDetailsExtendedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapRunningFightDetailsExtendedMessage(input);
};

MapRunningFightDetailsExtendedMessage.prototype.serializeAs_MapRunningFightDetailsExtendedMessage = function(param1) {
    this.serializeAs_MapRunningFightDetailsMessage(param1);
    param1.writeShort(this.namedPartyTeams.length);
    var _loc2_ = 0;
    while (_loc2_ < this.namedPartyTeams.length) {
        (this.namedPartyTeams[_loc2_]).serializeAs_NamedPartyTeam(param1);
        _loc2_++;
    }
};

MapRunningFightDetailsExtendedMessage.prototype.deserializeAs_MapRunningFightDetailsExtendedMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_MapRunningFightDetailsMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new NamedPartyTeam();
        _loc4_.deserialize(param1);
        this.namedPartyTeams.push(_loc4_);
        _loc3_++;
    }
};

MapRunningFightDetailsExtendedMessage.prototype.getMessageId = function() {
    return 6500;
};

MapRunningFightDetailsExtendedMessage.prototype.getClassName = function() {
    return 'MapRunningFightDetailsExtendedMessage';
};

module.exports.id = 6500;
module.exports.MapRunningFightDetailsExtendedMessage = MapRunningFightDetailsExtendedMessage;