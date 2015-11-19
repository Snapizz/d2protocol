/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightMonsterInformations = require('./game-fight-monster-informations');
var ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
var GameFightMonsterWithAlignmentInformations = (function (_super) {
    __extends(GameFightMonsterWithAlignmentInformations, _super);
    function GameFightMonsterWithAlignmentInformations() {
        this.alignmentInfos = new ActorAlignmentInformations();
        _super.call(this);
    }
    GameFightMonsterWithAlignmentInformations.prototype.getTypeId = function () {
        return GameFightMonsterWithAlignmentInformations.ID;
    };
    GameFightMonsterWithAlignmentInformations.prototype.reset = function () {
        this.alignmentInfos = new ActorAlignmentInformations();
    };
    GameFightMonsterWithAlignmentInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightMonsterWithAlignmentInformations(param1);
    };
    GameFightMonsterWithAlignmentInformations.prototype.serializeAs_GameFightMonsterWithAlignmentInformations = function (param1) {
        _super.prototype.serializeAs_GameFightMonsterInformations.call(this, param1);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
    };
    GameFightMonsterWithAlignmentInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightMonsterWithAlignmentInformations(param1);
    };
    GameFightMonsterWithAlignmentInformations.prototype.deserializeAs_GameFightMonsterWithAlignmentInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(param1);
    };
    GameFightMonsterWithAlignmentInformations.ID = 203;
    return GameFightMonsterWithAlignmentInformations;
})(GameFightMonsterInformations);
module.exports = GameFightMonsterWithAlignmentInformations;
