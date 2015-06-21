var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var NamedPartyTeam = require('../../../../types/game/context/roleplay/party/named-party-team.js').class;

var GameFightSpectatorJoinMessage = function() {
    this.namedPartyTeams = [];
};

require('util').inherits(GameFightSpectatorJoinMessage, require('./game-fight-join-message.js'));

module.exports = function() {
    return new GameFightSpectatorJoinMessage();
};

GameFightSpectatorJoinMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightSpectatorJoinMessage(output);
};

GameFightSpectatorJoinMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightSpectatorJoinMessage(input);
};

GameFightSpectatorJoinMessage.prototype.serializeAs_GameFightSpectatorJoinMessage = function(param1) {
    this.serializeAs_GameFightJoinMessage(param1);
    param1.writeShort(this.namedPartyTeams.length);
    var _loc2_ = 0;
    while (_loc2_ < this.namedPartyTeams.length) {
        (this.namedPartyTeams[_loc2_]).serializeAs_NamedPartyTeam(param1);
        _loc2_++;
    }
};

GameFightSpectatorJoinMessage.prototype.deserializeAs_GameFightSpectatorJoinMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_GameFightJoinMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new NamedPartyTeam();
        _loc4_.deserialize(param1);
        this.namedPartyTeams.push(_loc4_);
        _loc3_++;
    }
};

GameFightSpectatorJoinMessage.prototype.getMessageId = function() {
    return 6504;
};

GameFightSpectatorJoinMessage.prototype.getClassName = function() {
    return 'GameFightSpectatorJoinMessage';
};

module.exports.id = 6504;
module.exports.GameFightSpectatorJoinMessage = GameFightSpectatorJoinMessage;