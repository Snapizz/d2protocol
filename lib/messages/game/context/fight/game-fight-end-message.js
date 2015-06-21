var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FightResultListEntry = require('../../../../types/game/context/fight/fight-result-list-entry.js').class;
var NamedPartyTeamWithOutcome = require('../../../../types/game/context/roleplay/party/named-party-team-with-outcome.js').class;

var GameFightEndMessage = module.exports = function() {
    this.duration = 0;
    this.ageBonus = 0;
    this.lootShareLimitMalus = 0;
    this.results = [];
    this.namedPartyTeamsOutcomes = [];

    return this;
};

require('util').inherits(GameFightEndMessage, d2com.NetworkMessage.class);

GameFightEndMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightEndMessage(output);
};

GameFightEndMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightEndMessage(input);
};

GameFightEndMessage.prototype.serializeAs_GameFightEndMessage = function(param1) {
    if (this.duration < 0) {
        throw new Error("Forbidden value (" + this.duration + ") on element duration.");
    } else {
        param1.writeInt(this.duration);
        param1.writeShort(this.ageBonus);
        param1.writeShort(this.lootShareLimitMalus);
        param1.writeShort(this.results.length);
        var _loc2_ = 0;
        while (_loc2_ < this.results.length) {
            param1.writeShort((this.results[_loc2_]).getTypeId());
            (this.results[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.namedPartyTeamsOutcomes.length);
        var _loc3_ = 0;
        while (_loc3_ < this.namedPartyTeamsOutcomes.length) {
            (this.namedPartyTeamsOutcomes[_loc3_]).serializeAs_NamedPartyTeamWithOutcome(param1);
            _loc3_++;
        }
        return;
    }
};

GameFightEndMessage.prototype.deserializeAs_GameFightEndMessage = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = null;
    var _loc8_ = null;
    this.duration = param1.readInt();
    if (this.duration < 0) {
        throw new Error("Forbidden value (" + this.duration + ") on element of GameFightEndMessage.duration.");
    } else {
        this.ageBonus = param1.readShort();
        this.lootShareLimitMalus = param1.readShort();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(FightResultListEntry, _loc6_);
            _loc7_.deserialize(param1);
            this.results.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = new NamedPartyTeamWithOutcome();
            _loc8_.deserialize(param1);
            this.namedPartyTeamsOutcomes.push(_loc8_);
            _loc5_++;
        }
        return;
    }
};

GameFightEndMessage.prototype.getMessageId = function() {
    return 720;
};

GameFightEndMessage.prototype.getClassName = function() {
    return 'GameFightEndMessage';
};

module.exports.id = 720;