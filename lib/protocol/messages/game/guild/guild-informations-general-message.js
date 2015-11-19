/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var GuildInformationsGeneralMessage = (function (_super) {
    __extends(GuildInformationsGeneralMessage, _super);
    function GuildInformationsGeneralMessage() {
        this.enabled = false;
        this.abandonnedPaddock = false;
        this.level = 0;
        this.expLevelFloor = 0;
        this.experience = 0;
        this.expNextLevelFloor = 0;
        this.creationDate = 0;
        this.nbTotalMembers = 0;
        this.nbConnectedMembers = 0;
        _super.call(this);
    }
    GuildInformationsGeneralMessage.prototype.getMessageId = function () {
        return GuildInformationsGeneralMessage.ID;
    };
    GuildInformationsGeneralMessage.prototype.reset = function () {
        this.enabled = false;
        this.abandonnedPaddock = false;
        this.level = 0;
        this.expLevelFloor = 0;
        this.experience = 0;
        this.expNextLevelFloor = 0;
        this.creationDate = 0;
        this.nbTotalMembers = 0;
        this.nbConnectedMembers = 0;
    };
    GuildInformationsGeneralMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInformationsGeneralMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInformationsGeneralMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInformationsGeneralMessage(param1);
    };
    GuildInformationsGeneralMessage.prototype.serializeAs_GuildInformationsGeneralMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.enabled);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.abandonnedPaddock);
        param1.writeByte(_loc2_);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        if (this.expLevelFloor < 0 || this.expLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expLevelFloor + ') on element expLevelFloor.');
        }
        param1.writeVarLong(this.expLevelFloor);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expNextLevelFloor + ') on element expNextLevelFloor.');
        }
        param1.writeVarLong(this.expNextLevelFloor);
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
        }
        param1.writeInt(this.creationDate);
        if (this.nbTotalMembers < 0) {
            throw new Error('Forbidden value (' + this.nbTotalMembers + ') on element nbTotalMembers.');
        }
        param1.writeVarShort(this.nbTotalMembers);
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element nbConnectedMembers.');
        }
        param1.writeVarShort(this.nbConnectedMembers);
    };
    GuildInformationsGeneralMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInformationsGeneralMessage(param1);
    };
    GuildInformationsGeneralMessage.prototype.deserializeAs_GuildInformationsGeneralMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.enabled = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.abandonnedPaddock = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GuildInformationsGeneralMessage.level.');
        }
        this.expLevelFloor = param1.readVarUhLong();
        if (this.expLevelFloor < 0 || this.expLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expLevelFloor + ') on element of GuildInformationsGeneralMessage.expLevelFloor.');
        }
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of GuildInformationsGeneralMessage.experience.');
        }
        this.expNextLevelFloor = param1.readVarUhLong();
        if (this.expNextLevelFloor < 0 || this.expNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.expNextLevelFloor + ') on element of GuildInformationsGeneralMessage.expNextLevelFloor.');
        }
        this.creationDate = param1.readInt();
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element of GuildInformationsGeneralMessage.creationDate.');
        }
        this.nbTotalMembers = param1.readVarUhShort();
        if (this.nbTotalMembers < 0) {
            throw new Error('Forbidden value (' + this.nbTotalMembers + ') on element of GuildInformationsGeneralMessage.nbTotalMembers.');
        }
        this.nbConnectedMembers = param1.readVarUhShort();
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element of GuildInformationsGeneralMessage.nbConnectedMembers.');
        }
    };
    GuildInformationsGeneralMessage.ID = 5557;
    return GuildInformationsGeneralMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInformationsGeneralMessage;
