/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../boolean-byte-wrapper');
var VersionExtended = require('../../types/version/version-extended');
var IdentificationMessage = (function (_super) {
    __extends(IdentificationMessage, _super);
    function IdentificationMessage() {
        this.version = new VersionExtended();
        this.lang = '';
        this.credentials = [];
        this.serverId = 0;
        this.autoconnect = false;
        this.useCertificate = false;
        this.useLoginToken = false;
        this.sessionOptionalSalt = 0;
        this.failedAttempts = [];
        _super.call(this);
    }
    IdentificationMessage.prototype.getMessageId = function () {
        return IdentificationMessage.ID;
    };
    IdentificationMessage.prototype.reset = function () {
        this.version = new VersionExtended();
        this.lang = '';
        this.credentials = [];
        this.serverId = 0;
        this.autoconnect = false;
        this.useCertificate = false;
        this.useLoginToken = false;
        this.sessionOptionalSalt = 0;
        this.failedAttempts = [];
    };
    IdentificationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationMessage(param1);
    };
    IdentificationMessage.prototype.serializeAs_IdentificationMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.autoconnect);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.useCertificate);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.useLoginToken);
        param1.writeByte(_loc2_);
        this.version.serializeAs_VersionExtended(param1);
        param1.writeUTF(this.lang);
        param1.writeVarInt(this.credentials.length);
        var _loc3_ = 0;
        while (_loc3_ < this.credentials.length) {
            param1.writeByte(this.credentials[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.serverId);
        if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.sessionOptionalSalt + ') on element sessionOptionalSalt.');
        }
        param1.writeVarLong(this.sessionOptionalSalt);
        param1.writeShort(this.failedAttempts.length);
        var _loc4_ = 0;
        while (_loc4_ < this.failedAttempts.length) {
            if (this.failedAttempts[_loc4_] < 0) {
                throw new Error('Forbidden value (' + this.failedAttempts[_loc4_] + ') on element 9 (starting at 1) of failedAttempts.');
            }
            param1.writeVarShort(this.failedAttempts[_loc4_]);
            _loc4_++;
        }
    };
    IdentificationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationMessage(param1);
    };
    IdentificationMessage.prototype.deserializeAs_IdentificationMessage = function (param1) {
        var _loc7_ = 0;
        var _loc8_ = 0;
        var _loc2_ = param1.readByte();
        this.autoconnect = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.useCertificate = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.useLoginToken = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.version = new VersionExtended();
        this.version.deserialize(param1);
        this.lang = param1.readUTF();
        var _loc3_ = param1.readVarInt();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc7_ = param1.readByte();
            this.credentials.push(_loc7_);
            _loc4_++;
        }
        this.serverId = param1.readShort();
        this.sessionOptionalSalt = param1.readVarLong();
        if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.sessionOptionalSalt + ') on element of IdentificationMessage.sessionOptionalSalt.');
        }
        var _loc5_ = param1.readUnsignedShort();
        var _loc6_ = 0;
        while (_loc6_ < _loc5_) {
            _loc8_ = param1.readVarUhShort();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of failedAttempts.');
            }
            this.failedAttempts.push(_loc8_);
            _loc6_++;
        }
    };
    IdentificationMessage.ID = 4;
    return IdentificationMessage;
})(network_message_1.NetworkMessage);
module.exports = IdentificationMessage;
