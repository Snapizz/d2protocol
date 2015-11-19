/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations');
var GuildInformationsPaddocksMessage = (function (_super) {
    __extends(GuildInformationsPaddocksMessage, _super);
    function GuildInformationsPaddocksMessage() {
        this.nbPaddockMax = 0;
        this.paddocksInformations = [];
        _super.call(this);
    }
    GuildInformationsPaddocksMessage.prototype.getMessageId = function () {
        return GuildInformationsPaddocksMessage.ID;
    };
    GuildInformationsPaddocksMessage.prototype.reset = function () {
        this.nbPaddockMax = 0;
        this.paddocksInformations = [];
    };
    GuildInformationsPaddocksMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInformationsPaddocksMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInformationsPaddocksMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInformationsPaddocksMessage(param1);
    };
    GuildInformationsPaddocksMessage.prototype.serializeAs_GuildInformationsPaddocksMessage = function (param1) {
        if (this.nbPaddockMax < 0) {
            throw new Error('Forbidden value (' + this.nbPaddockMax + ') on element nbPaddockMax.');
        }
        param1.writeByte(this.nbPaddockMax);
        param1.writeShort(this.paddocksInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.paddocksInformations.length) {
            (this.paddocksInformations[_loc2_]).serializeAs_PaddockContentInformations(param1);
            _loc2_++;
        }
    };
    GuildInformationsPaddocksMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInformationsPaddocksMessage(param1);
    };
    GuildInformationsPaddocksMessage.prototype.deserializeAs_GuildInformationsPaddocksMessage = function (param1) {
        var _loc4_ = null;
        this.nbPaddockMax = param1.readByte();
        if (this.nbPaddockMax < 0) {
            throw new Error('Forbidden value (' + this.nbPaddockMax + ') on element of GuildInformationsPaddocksMessage.nbPaddockMax.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PaddockContentInformations();
            _loc4_.deserialize(param1);
            this.paddocksInformations.push(_loc4_);
            _loc3_++;
        }
    };
    GuildInformationsPaddocksMessage.ID = 5959;
    return GuildInformationsPaddocksMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInformationsPaddocksMessage;
