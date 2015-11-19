/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightMinimalStats = require('./game-fight-minimal-stats');
var GameFightMinimalStatsPreparation = (function (_super) {
    __extends(GameFightMinimalStatsPreparation, _super);
    function GameFightMinimalStatsPreparation() {
        this.initiative = 0;
        _super.call(this);
    }
    GameFightMinimalStatsPreparation.prototype.getTypeId = function () {
        return GameFightMinimalStatsPreparation.ID;
    };
    GameFightMinimalStatsPreparation.prototype.reset = function () {
        this.initiative = 0;
    };
    GameFightMinimalStatsPreparation.prototype.serialize = function (param1) {
        this.serializeAs_GameFightMinimalStatsPreparation(param1);
    };
    GameFightMinimalStatsPreparation.prototype.serializeAs_GameFightMinimalStatsPreparation = function (param1) {
        _super.prototype.serializeAs_GameFightMinimalStats.call(this, param1);
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
        }
        param1.writeVarInt(this.initiative);
    };
    GameFightMinimalStatsPreparation.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightMinimalStatsPreparation(param1);
    };
    GameFightMinimalStatsPreparation.prototype.deserializeAs_GameFightMinimalStatsPreparation = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.initiative = param1.readVarUhInt();
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element of GameFightMinimalStatsPreparation.initiative.');
        }
    };
    GameFightMinimalStatsPreparation.ID = 360;
    return GameFightMinimalStatsPreparation;
})(GameFightMinimalStats);
module.exports = GameFightMinimalStatsPreparation;
