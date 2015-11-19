/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapFightCountMessage = (function (_super) {
    __extends(MapFightCountMessage, _super);
    function MapFightCountMessage() {
        this.fightCount = 0;
        _super.call(this);
    }
    MapFightCountMessage.prototype.getMessageId = function () {
        return MapFightCountMessage.ID;
    };
    MapFightCountMessage.prototype.reset = function () {
        this.fightCount = 0;
    };
    MapFightCountMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapFightCountMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapFightCountMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapFightCountMessage(param1);
    };
    MapFightCountMessage.prototype.serializeAs_MapFightCountMessage = function (param1) {
        if (this.fightCount < 0) {
            throw new Error('Forbidden value (' + this.fightCount + ') on element fightCount.');
        }
        param1.writeVarShort(this.fightCount);
    };
    MapFightCountMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapFightCountMessage(param1);
    };
    MapFightCountMessage.prototype.deserializeAs_MapFightCountMessage = function (param1) {
        this.fightCount = param1.readVarUhShort();
        if (this.fightCount < 0) {
            throw new Error('Forbidden value (' + this.fightCount + ') on element of MapFightCountMessage.fightCount.');
        }
    };
    MapFightCountMessage.ID = 210;
    return MapFightCountMessage;
})(network_message_1.NetworkMessage);
module.exports = MapFightCountMessage;
