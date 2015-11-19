/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntShowLegendaryUIMessage = (function (_super) {
    __extends(TreasureHuntShowLegendaryUIMessage, _super);
    function TreasureHuntShowLegendaryUIMessage() {
        this.availableLegendaryIds = [];
        _super.call(this);
    }
    TreasureHuntShowLegendaryUIMessage.prototype.getMessageId = function () {
        return TreasureHuntShowLegendaryUIMessage.ID;
    };
    TreasureHuntShowLegendaryUIMessage.prototype.reset = function () {
        this.availableLegendaryIds = [];
    };
    TreasureHuntShowLegendaryUIMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntShowLegendaryUIMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntShowLegendaryUIMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntShowLegendaryUIMessage(param1);
    };
    TreasureHuntShowLegendaryUIMessage.prototype.serializeAs_TreasureHuntShowLegendaryUIMessage = function (param1) {
        param1.writeShort(this.availableLegendaryIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.availableLegendaryIds.length) {
            if (this.availableLegendaryIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.availableLegendaryIds[_loc2_] + ') on element 1 (starting at 1) of availableLegendaryIds.');
            }
            param1.writeVarShort(this.availableLegendaryIds[_loc2_]);
            _loc2_++;
        }
    };
    TreasureHuntShowLegendaryUIMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntShowLegendaryUIMessage(param1);
    };
    TreasureHuntShowLegendaryUIMessage.prototype.deserializeAs_TreasureHuntShowLegendaryUIMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of availableLegendaryIds.');
            }
            this.availableLegendaryIds.push(_loc4_);
            _loc3_++;
        }
    };
    TreasureHuntShowLegendaryUIMessage.ID = 6498;
    return TreasureHuntShowLegendaryUIMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntShowLegendaryUIMessage;
