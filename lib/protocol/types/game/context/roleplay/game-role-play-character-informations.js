/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayHumanoidInformations = require('./game-role-play-humanoid-informations');
var ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
var GameRolePlayCharacterInformations = (function (_super) {
    __extends(GameRolePlayCharacterInformations, _super);
    function GameRolePlayCharacterInformations() {
        this.alignmentInfos = new ActorAlignmentInformations();
        _super.call(this);
    }
    GameRolePlayCharacterInformations.prototype.getTypeId = function () {
        return GameRolePlayCharacterInformations.ID;
    };
    GameRolePlayCharacterInformations.prototype.reset = function () {
        this.alignmentInfos = new ActorAlignmentInformations();
    };
    GameRolePlayCharacterInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayCharacterInformations(param1);
    };
    GameRolePlayCharacterInformations.prototype.serializeAs_GameRolePlayCharacterInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayHumanoidInformations.call(this, param1);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
    };
    GameRolePlayCharacterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayCharacterInformations(param1);
    };
    GameRolePlayCharacterInformations.prototype.deserializeAs_GameRolePlayCharacterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(param1);
    };
    GameRolePlayCharacterInformations.ID = 36;
    return GameRolePlayCharacterInformations;
})(GameRolePlayHumanoidInformations);
module.exports = GameRolePlayCharacterInformations;
