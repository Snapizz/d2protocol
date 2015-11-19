/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IgnoredInformations = require('./ignored-informations');
var PlayableBreedEnum = require('../../../enums/playable-breed-enum');
var IgnoredOnlineInformations = (function (_super) {
    __extends(IgnoredOnlineInformations, _super);
    function IgnoredOnlineInformations() {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
        _super.call(this);
    }
    IgnoredOnlineInformations.prototype.getTypeId = function () {
        return IgnoredOnlineInformations.ID;
    };
    IgnoredOnlineInformations.prototype.reset = function () {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
    };
    IgnoredOnlineInformations.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredOnlineInformations(param1);
    };
    IgnoredOnlineInformations.prototype.serializeAs_IgnoredOnlineInformations = function (param1) {
        _super.prototype.serializeAs_IgnoredInformations.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
    };
    IgnoredOnlineInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredOnlineInformations(param1);
    };
    IgnoredOnlineInformations.prototype.deserializeAs_IgnoredOnlineInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of IgnoredOnlineInformations.playerId.');
        }
        this.playerName = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of IgnoredOnlineInformations.breed.');
        }
        this.sex = param1.readBoolean();
    };
    IgnoredOnlineInformations.ID = 105;
    return IgnoredOnlineInformations;
})(IgnoredInformations);
module.exports = IgnoredOnlineInformations;
