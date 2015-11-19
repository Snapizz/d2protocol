/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PlayerStatus = require('./player-status');
var PlayerStatusExtended = (function (_super) {
    __extends(PlayerStatusExtended, _super);
    function PlayerStatusExtended() {
        this.message = '';
        _super.call(this);
    }
    PlayerStatusExtended.prototype.getTypeId = function () {
        return PlayerStatusExtended.ID;
    };
    PlayerStatusExtended.prototype.reset = function () {
        this.message = '';
    };
    PlayerStatusExtended.prototype.serialize = function (param1) {
        this.serializeAs_PlayerStatusExtended(param1);
    };
    PlayerStatusExtended.prototype.serializeAs_PlayerStatusExtended = function (param1) {
        _super.prototype.serializeAs_PlayerStatus.call(this, param1);
        param1.writeUTF(this.message);
    };
    PlayerStatusExtended.prototype.deserialize = function (param1) {
        this.deserializeAs_PlayerStatusExtended(param1);
    };
    PlayerStatusExtended.prototype.deserializeAs_PlayerStatusExtended = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.message = param1.readUTF();
    };
    PlayerStatusExtended.ID = 414;
    return PlayerStatusExtended;
})(PlayerStatus);
module.exports = PlayerStatusExtended;
