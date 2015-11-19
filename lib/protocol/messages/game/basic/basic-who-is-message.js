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
var AbstractSocialGroupInfos = require('../../../types/game/social/abstract-social-group-infos');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var BasicWhoIsMessage = (function (_super) {
    __extends(BasicWhoIsMessage, _super);
    function BasicWhoIsMessage() {
        this.self = false;
        this.position = -1;
        this.accountNickname = '';
        this.accountId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.areaId = 0;
        this.socialGroups = [];
        this.verbose = false;
        this.playerState = 99;
        _super.call(this);
    }
    BasicWhoIsMessage.prototype.getMessageId = function () {
        return BasicWhoIsMessage.ID;
    };
    BasicWhoIsMessage.prototype.reset = function () {
        this.self = false;
        this.position = -1;
        this.accountNickname = '';
        this.accountId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.areaId = 0;
        this.socialGroups = [];
        this.verbose = false;
        this.playerState = 99;
    };
    BasicWhoIsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicWhoIsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicWhoIsMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicWhoIsMessage(param1);
    };
    BasicWhoIsMessage.prototype.serializeAs_BasicWhoIsMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.self);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.verbose);
        param1.writeByte(_loc2_);
        param1.writeByte(this.position);
        param1.writeUTF(this.accountNickname);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        param1.writeUTF(this.playerName);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeShort(this.areaId);
        param1.writeShort(this.socialGroups.length);
        var _loc3_ = 0;
        while (_loc3_ < this.socialGroups.length) {
            param1.writeShort((this.socialGroups[_loc3_]).getTypeId());
            (this.socialGroups[_loc3_]).serialize(param1);
            _loc3_++;
        }
        param1.writeByte(this.playerState);
    };
    BasicWhoIsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicWhoIsMessage(param1);
    };
    BasicWhoIsMessage.prototype.deserializeAs_BasicWhoIsMessage = function (param1) {
        var _loc5_ = 0;
        var _loc6_ = null;
        var _loc2_ = param1.readByte();
        this.self = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.verbose = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.position = param1.readByte();
        this.accountNickname = param1.readUTF();
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of BasicWhoIsMessage.accountId.');
        }
        this.playerName = param1.readUTF();
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of BasicWhoIsMessage.playerId.');
        }
        this.areaId = param1.readShort();
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc5_ = param1.readUnsignedShort();
            _loc6_ = ProtocolTypeManager.getInstance(AbstractSocialGroupInfos, _loc5_);
            _loc6_.deserialize(param1);
            this.socialGroups.push(_loc6_);
            _loc4_++;
        }
        this.playerState = param1.readByte();
        if (this.playerState < 0) {
            throw new Error('Forbidden value (' + this.playerState + ') on element of BasicWhoIsMessage.playerState.');
        }
    };
    BasicWhoIsMessage.ID = 180;
    return BasicWhoIsMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicWhoIsMessage;
