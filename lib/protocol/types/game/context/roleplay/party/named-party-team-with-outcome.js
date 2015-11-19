/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var NamedPartyTeam = require('./named-party-team');
var NamedPartyTeamWithOutcome = (function () {
    function NamedPartyTeamWithOutcome() {
        this.team = new NamedPartyTeam();
        this.outcome = 0;
    }
    NamedPartyTeamWithOutcome.prototype.getTypeId = function () {
        return NamedPartyTeamWithOutcome.ID;
    };
    NamedPartyTeamWithOutcome.prototype.reset = function () {
        this.team = new NamedPartyTeam();
        this.outcome = 0;
    };
    NamedPartyTeamWithOutcome.prototype.serialize = function (param1) {
        this.serializeAs_NamedPartyTeamWithOutcome(param1);
    };
    NamedPartyTeamWithOutcome.prototype.serializeAs_NamedPartyTeamWithOutcome = function (param1) {
        this.team.serializeAs_NamedPartyTeam(param1);
        param1.writeVarShort(this.outcome);
    };
    NamedPartyTeamWithOutcome.prototype.deserialize = function (param1) {
        this.deserializeAs_NamedPartyTeamWithOutcome(param1);
    };
    NamedPartyTeamWithOutcome.prototype.deserializeAs_NamedPartyTeamWithOutcome = function (param1) {
        this.team = new NamedPartyTeam();
        this.team.deserialize(param1);
        this.outcome = param1.readVarUhShort();
        if (this.outcome < 0) {
            throw new Error('Forbidden value (' + this.outcome + ') on element of NamedPartyTeamWithOutcome.outcome.');
        }
    };
    NamedPartyTeamWithOutcome.ID = 470;
    return NamedPartyTeamWithOutcome;
})();
module.exports = NamedPartyTeamWithOutcome;
