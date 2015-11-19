/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityLook = require('../look/entity-look');
var BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
var FriendSpouseInformations = (function () {
    function FriendSpouseInformations() {
        this.spouseAccountId = 0;
        this.spouseId = 0;
        this.spouseName = '';
        this.spouseLevel = 0;
        this.breed = 0;
        this.sex = 0;
        this.spouseEntityLook = new EntityLook();
        this.guildInfo = new BasicGuildInformations();
        this.alignmentSide = 0;
    }
    FriendSpouseInformations.prototype.getTypeId = function () {
        return FriendSpouseInformations.ID;
    };
    FriendSpouseInformations.prototype.reset = function () {
        this.spouseAccountId = 0;
        this.spouseId = 0;
        this.spouseName = '';
        this.spouseLevel = 0;
        this.breed = 0;
        this.sex = 0;
        this.spouseEntityLook = new EntityLook();
        this.guildInfo = new BasicGuildInformations();
        this.alignmentSide = 0;
    };
    FriendSpouseInformations.prototype.serialize = function (param1) {
        this.serializeAs_FriendSpouseInformations(param1);
    };
    FriendSpouseInformations.prototype.serializeAs_FriendSpouseInformations = function (param1) {
        if (this.spouseAccountId < 0) {
            throw new Error('Forbidden value (' + this.spouseAccountId + ') on element spouseAccountId.');
        }
        param1.writeInt(this.spouseAccountId);
        if (this.spouseId < 0) {
            throw new Error('Forbidden value (' + this.spouseId + ') on element spouseId.');
        }
        param1.writeVarInt(this.spouseId);
        param1.writeUTF(this.spouseName);
        if (this.spouseLevel < 1 || this.spouseLevel > 200) {
            throw new Error('Forbidden value (' + this.spouseLevel + ') on element spouseLevel.');
        }
        param1.writeByte(this.spouseLevel);
        param1.writeByte(this.breed);
        param1.writeByte(this.sex);
        this.spouseEntityLook.serializeAs_EntityLook(param1);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        param1.writeByte(this.alignmentSide);
    };
    FriendSpouseInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendSpouseInformations(param1);
    };
    FriendSpouseInformations.prototype.deserializeAs_FriendSpouseInformations = function (param1) {
        this.spouseAccountId = param1.readInt();
        if (this.spouseAccountId < 0) {
            throw new Error('Forbidden value (' + this.spouseAccountId + ') on element of FriendSpouseInformations.spouseAccountId.');
        }
        this.spouseId = param1.readVarUhInt();
        if (this.spouseId < 0) {
            throw new Error('Forbidden value (' + this.spouseId + ') on element of FriendSpouseInformations.spouseId.');
        }
        this.spouseName = param1.readUTF();
        this.spouseLevel = param1.readUnsignedByte();
        if (this.spouseLevel < 1 || this.spouseLevel > 200) {
            throw new Error('Forbidden value (' + this.spouseLevel + ') on element of FriendSpouseInformations.spouseLevel.');
        }
        this.breed = param1.readByte();
        this.sex = param1.readByte();
        this.spouseEntityLook = new EntityLook();
        this.spouseEntityLook.deserialize(param1);
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.alignmentSide = param1.readByte();
    };
    FriendSpouseInformations.ID = 77;
    return FriendSpouseInformations;
})();
module.exports = FriendSpouseInformations;
