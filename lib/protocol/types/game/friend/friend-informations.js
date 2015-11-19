/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractContactInformations = require('./abstract-contact-informations');
var FriendInformations = (function (_super) {
    __extends(FriendInformations, _super);
    function FriendInformations() {
        this.playerState = 99;
        this.lastConnection = 0;
        this.achievementPoints = 0;
        _super.call(this);
    }
    FriendInformations.prototype.getTypeId = function () {
        return FriendInformations.ID;
    };
    FriendInformations.prototype.reset = function () {
        this.playerState = 99;
        this.lastConnection = 0;
        this.achievementPoints = 0;
    };
    FriendInformations.prototype.serialize = function (param1) {
        this.serializeAs_FriendInformations(param1);
    };
    FriendInformations.prototype.serializeAs_FriendInformations = function (param1) {
        _super.prototype.serializeAs_AbstractContactInformations.call(this, param1);
        param1.writeByte(this.playerState);
        if (this.lastConnection < 0) {
            throw new Error('Forbidden value (' + this.lastConnection + ') on element lastConnection.');
        }
        param1.writeVarShort(this.lastConnection);
        param1.writeInt(this.achievementPoints);
    };
    FriendInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendInformations(param1);
    };
    FriendInformations.prototype.deserializeAs_FriendInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerState = param1.readByte();
        if (this.playerState < 0) {
            throw new Error('Forbidden value (' + this.playerState + ') on element of FriendInformations.playerState.');
        }
        this.lastConnection = param1.readVarUhShort();
        if (this.lastConnection < 0) {
            throw new Error('Forbidden value (' + this.lastConnection + ') on element of FriendInformations.lastConnection.');
        }
        this.achievementPoints = param1.readInt();
    };
    FriendInformations.ID = 78;
    return FriendInformations;
})(AbstractContactInformations);
module.exports = FriendInformations;
