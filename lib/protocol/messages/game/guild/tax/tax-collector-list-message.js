/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractTaxCollectorListMessage = require('./abstract-tax-collector-list-message');
var TaxCollectorFightersInformation = require('../../../../types/game/guild/tax/tax-collector-fighters-information');
var TaxCollectorListMessage = (function (_super) {
    __extends(TaxCollectorListMessage, _super);
    function TaxCollectorListMessage() {
        this.nbcollectorMax = 0;
        this.fightersInformations = [];
        _super.call(this);
    }
    TaxCollectorListMessage.prototype.getMessageId = function () {
        return TaxCollectorListMessage.ID;
    };
    TaxCollectorListMessage.prototype.reset = function () {
        this.nbcollectorMax = 0;
        this.fightersInformations = [];
    };
    TaxCollectorListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorListMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorListMessage(param1);
    };
    TaxCollectorListMessage.prototype.serializeAs_TaxCollectorListMessage = function (param1) {
        _super.prototype.serializeAs_AbstractTaxCollectorListMessage.call(this, param1);
        if (this.nbcollectorMax < 0) {
            throw new Error('Forbidden value (' + this.nbcollectorMax + ') on element nbcollectorMax.');
        }
        param1.writeByte(this.nbcollectorMax);
        param1.writeShort(this.fightersInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.fightersInformations.length) {
            (this.fightersInformations[_loc2_]).serializeAs_TaxCollectorFightersInformation(param1);
            _loc2_++;
        }
    };
    TaxCollectorListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorListMessage(param1);
    };
    TaxCollectorListMessage.prototype.deserializeAs_TaxCollectorListMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.nbcollectorMax = param1.readByte();
        if (this.nbcollectorMax < 0) {
            throw new Error('Forbidden value (' + this.nbcollectorMax + ') on element of TaxCollectorListMessage.nbcollectorMax.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new TaxCollectorFightersInformation();
            _loc4_.deserialize(param1);
            this.fightersInformations.push(_loc4_);
            _loc3_++;
        }
    };
    TaxCollectorListMessage.ID = 5930;
    return TaxCollectorListMessage;
})(AbstractTaxCollectorListMessage);
module.exports = TaxCollectorListMessage;
