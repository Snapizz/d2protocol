/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightAIInformations = require('./game-fight-a-i-informations');
var GameFightTaxCollectorInformations = (function (_super) {
    __extends(GameFightTaxCollectorInformations, _super);
    function GameFightTaxCollectorInformations() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
        _super.call(this);
    }
    GameFightTaxCollectorInformations.prototype.getTypeId = function () {
        return GameFightTaxCollectorInformations.ID;
    };
    GameFightTaxCollectorInformations.prototype.reset = function () {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
    };
    GameFightTaxCollectorInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTaxCollectorInformations(param1);
    };
    GameFightTaxCollectorInformations.prototype.serializeAs_GameFightTaxCollectorInformations = function (param1) {
        _super.prototype.serializeAs_GameFightAIInformations.call(this, param1);
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
    };
    GameFightTaxCollectorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTaxCollectorInformations(param1);
    };
    GameFightTaxCollectorInformations.prototype.deserializeAs_GameFightTaxCollectorInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightTaxCollectorInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightTaxCollectorInformations.lastNameId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightTaxCollectorInformations.level.');
        }
    };
    GameFightTaxCollectorInformations.ID = 48;
    return GameFightTaxCollectorInformations;
})(GameFightAIInformations);
module.exports = GameFightTaxCollectorInformations;
