/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterNamedInformations = require('./game-fight-fighter-named-informations');
var ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
var GameFightCharacterInformations = (function (_super) {
    __extends(GameFightCharacterInformations, _super);
    function GameFightCharacterInformations() {
        this.level = 0;
        this.alignmentInfos = new ActorAlignmentInformations();
        this.breed = 0;
        this.sex = false;
        _super.call(this);
    }
    GameFightCharacterInformations.prototype.getTypeId = function () {
        return GameFightCharacterInformations.ID;
    };
    GameFightCharacterInformations.prototype.reset = function () {
        this.level = 0;
        this.alignmentInfos = new ActorAlignmentInformations();
        this.breed = 0;
        this.sex = false;
    };
    GameFightCharacterInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightCharacterInformations(param1);
    };
    GameFightCharacterInformations.prototype.serializeAs_GameFightCharacterInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterNamedInformations.call(this, param1);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
    };
    GameFightCharacterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightCharacterInformations(param1);
    };
    GameFightCharacterInformations.prototype.deserializeAs_GameFightCharacterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightCharacterInformations.level.');
        }
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
    };
    GameFightCharacterInformations.ID = 46;
    return GameFightCharacterInformations;
})(GameFightFighterNamedInformations);
module.exports = GameFightCharacterInformations;
