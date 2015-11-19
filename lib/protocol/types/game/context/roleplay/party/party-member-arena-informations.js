/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PartyMemberInformations = require('./party-member-informations');
var PartyMemberArenaInformations = (function (_super) {
    __extends(PartyMemberArenaInformations, _super);
    function PartyMemberArenaInformations() {
        this.rank = 0;
        _super.call(this);
    }
    PartyMemberArenaInformations.prototype.getTypeId = function () {
        return PartyMemberArenaInformations.ID;
    };
    PartyMemberArenaInformations.prototype.reset = function () {
        this.rank = 0;
    };
    PartyMemberArenaInformations.prototype.serialize = function (param1) {
        this.serializeAs_PartyMemberArenaInformations(param1);
    };
    PartyMemberArenaInformations.prototype.serializeAs_PartyMemberArenaInformations = function (param1) {
        _super.prototype.serializeAs_PartyMemberInformations.call(this, param1);
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);
    };
    PartyMemberArenaInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyMemberArenaInformations(param1);
    };
    PartyMemberArenaInformations.prototype.deserializeAs_PartyMemberArenaInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.rank = param1.readVarUhShort();
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element of PartyMemberArenaInformations.rank.');
        }
    };
    PartyMemberArenaInformations.ID = 391;
    return PartyMemberArenaInformations;
})(PartyMemberInformations);
module.exports = PartyMemberArenaInformations;
