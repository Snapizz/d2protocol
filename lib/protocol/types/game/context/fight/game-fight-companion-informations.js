/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterInformations = require('./game-fight-fighter-informations');
var GameFightCompanionInformations = (function (_super) {
    __extends(GameFightCompanionInformations, _super);
    function GameFightCompanionInformations() {
        this.companionGenericId = 0;
        this.level = 0;
        this.masterId = 0;
        _super.call(this);
    }
    GameFightCompanionInformations.prototype.getTypeId = function () {
        return GameFightCompanionInformations.ID;
    };
    GameFightCompanionInformations.prototype.reset = function () {
        this.companionGenericId = 0;
        this.level = 0;
        this.masterId = 0;
    };
    GameFightCompanionInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightCompanionInformations(param1);
    };
    GameFightCompanionInformations.prototype.serializeAs_GameFightCompanionInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterInformations.call(this, param1);
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
        }
        param1.writeByte(this.companionGenericId);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeInt(this.masterId);
    };
    GameFightCompanionInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightCompanionInformations(param1);
    };
    GameFightCompanionInformations.prototype.deserializeAs_GameFightCompanionInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.companionGenericId = param1.readByte();
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element of GameFightCompanionInformations.companionGenericId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightCompanionInformations.level.');
        }
        this.masterId = param1.readInt();
    };
    GameFightCompanionInformations.ID = 450;
    return GameFightCompanionInformations;
})(GameFightFighterInformations);
module.exports = GameFightCompanionInformations;
