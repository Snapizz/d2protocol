/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var FightTeamLightInformations = require('./fight-team-light-informations');
var FightOptionsInformations = require('./fight-options-informations');
var FightExternalInformations = (function () {
    function FightExternalInformations() {
        this.fightId = 0;
        this.fightType = 0;
        this.fightStart = 0;
        this.fightSpectatorLocked = false;
        this.fightTeams = [];
        this.fightTeamsOptions = [];
    }
    FightExternalInformations.prototype.getTypeId = function () {
        return FightExternalInformations.ID;
    };
    FightExternalInformations.prototype.reset = function () {
        this.fightId = 0;
        this.fightType = 0;
        this.fightStart = 0;
        this.fightSpectatorLocked = false;
        this.fightTeams = [];
        this.fightTeamsOptions = [];
    };
    FightExternalInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightExternalInformations(param1);
    };
    FightExternalInformations.prototype.serializeAs_FightExternalInformations = function (param1) {
        param1.writeInt(this.fightId);
        param1.writeByte(this.fightType);
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element fightStart.');
        }
        param1.writeInt(this.fightStart);
        param1.writeBoolean(this.fightSpectatorLocked);
        var _loc2_ = 0;
        while (_loc2_ < 2) {
            this.fightTeams[_loc2_].serializeAs_FightTeamLightInformations(param1);
            _loc2_++;
        }
        var _loc3_ = 0;
        while (_loc3_ < 2) {
            this.fightTeamsOptions[_loc3_].serializeAs_FightOptionsInformations(param1);
            _loc3_++;
        }
    };
    FightExternalInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightExternalInformations(param1);
    };
    FightExternalInformations.prototype.deserializeAs_FightExternalInformations = function (param1) {
        this.fightId = param1.readInt();
        this.fightType = param1.readByte();
        if (this.fightType < 0) {
            throw new Error('Forbidden value (' + this.fightType + ') on element of FightExternalInformations.fightType.');
        }
        this.fightStart = param1.readInt();
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element of FightExternalInformations.fightStart.');
        }
        this.fightSpectatorLocked = param1.readBoolean();
        var _loc2_ = 0;
        while (_loc2_ < 2) {
            this.fightTeams[_loc2_] = new FightTeamLightInformations();
            this.fightTeams[_loc2_].deserialize(param1);
            _loc2_++;
        }
        var _loc3_ = 0;
        while (_loc3_ < 2) {
            this.fightTeamsOptions[_loc3_] = new FightOptionsInformations();
            this.fightTeamsOptions[_loc3_].deserialize(param1);
            _loc3_++;
        }
    };
    FightExternalInformations.ID = 117;
    return FightExternalInformations;
})();
module.exports = FightExternalInformations;
