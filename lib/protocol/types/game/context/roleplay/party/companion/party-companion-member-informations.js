/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PartyCompanionBaseInformations = require('./party-companion-base-informations');
var PartyCompanionMemberInformations = (function (_super) {
    __extends(PartyCompanionMemberInformations, _super);
    function PartyCompanionMemberInformations() {
        this.initiative = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
        _super.call(this);
    }
    PartyCompanionMemberInformations.prototype.getTypeId = function () {
        return PartyCompanionMemberInformations.ID;
    };
    PartyCompanionMemberInformations.prototype.reset = function () {
        this.initiative = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
    };
    PartyCompanionMemberInformations.prototype.serialize = function (param1) {
        this.serializeAs_PartyCompanionMemberInformations(param1);
    };
    PartyCompanionMemberInformations.prototype.serializeAs_PartyCompanionMemberInformations = function (param1) {
        _super.prototype.serializeAs_PartyCompanionBaseInformations.call(this, param1);
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
        }
        param1.writeVarShort(this.initiative);
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);
    };
    PartyCompanionMemberInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyCompanionMemberInformations(param1);
    };
    PartyCompanionMemberInformations.prototype.deserializeAs_PartyCompanionMemberInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.initiative = param1.readVarUhShort();
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element of PartyCompanionMemberInformations.initiative.');
        }
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyCompanionMemberInformations.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyCompanionMemberInformations.maxLifePoints.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyCompanionMemberInformations.prospecting.');
        }
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyCompanionMemberInformations.regenRate.');
        }
    };
    PartyCompanionMemberInformations.ID = 452;
    return PartyCompanionMemberInformations;
})(PartyCompanionBaseInformations);
module.exports = PartyCompanionMemberInformations;
