/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterInformations = require('./game-fight-fighter-informations');
var GameFightAIInformations = (function (_super) {
    __extends(GameFightAIInformations, _super);
    function GameFightAIInformations() {
        _super.call(this);
    }
    GameFightAIInformations.prototype.getTypeId = function () {
        return GameFightAIInformations.ID;
    };
    GameFightAIInformations.prototype.reset = function () {
    };
    GameFightAIInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightAIInformations(param1);
    };
    GameFightAIInformations.prototype.serializeAs_GameFightAIInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterInformations.call(this, param1);
    };
    GameFightAIInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightAIInformations(param1);
    };
    GameFightAIInformations.prototype.deserializeAs_GameFightAIInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GameFightAIInformations.ID = 151;
    return GameFightAIInformations;
})(GameFightFighterInformations);
module.exports = GameFightAIInformations;
