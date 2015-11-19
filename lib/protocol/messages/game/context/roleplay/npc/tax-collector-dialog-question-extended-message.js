/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorDialogQuestionBasicMessage = require('./tax-collector-dialog-question-basic-message');
var TaxCollectorDialogQuestionExtendedMessage = (function (_super) {
    __extends(TaxCollectorDialogQuestionExtendedMessage, _super);
    function TaxCollectorDialogQuestionExtendedMessage() {
        this.maxPods = 0;
        this.prospecting = 0;
        this.wisdom = 0;
        this.taxCollectorsCount = 0;
        this.taxCollectorAttack = 0;
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
        _super.call(this);
    }
    TaxCollectorDialogQuestionExtendedMessage.prototype.getMessageId = function () {
        return TaxCollectorDialogQuestionExtendedMessage.ID;
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.reset = function () {
        this.maxPods = 0;
        this.prospecting = 0;
        this.wisdom = 0;
        this.taxCollectorsCount = 0;
        this.taxCollectorAttack = 0;
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.serializeAs_TaxCollectorDialogQuestionExtendedMessage = function (param1) {
        _super.prototype.serializeAs_TaxCollectorDialogQuestionBasicMessage.call(this, param1);
        if (this.maxPods < 0) {
            throw new Error('Forbidden value (' + this.maxPods + ') on element maxPods.');
        }
        param1.writeVarShort(this.maxPods);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.wisdom < 0) {
            throw new Error('Forbidden value (' + this.wisdom + ') on element wisdom.');
        }
        param1.writeVarShort(this.wisdom);
        if (this.taxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorsCount + ') on element taxCollectorsCount.');
        }
        param1.writeByte(this.taxCollectorsCount);
        param1.writeInt(this.taxCollectorAttack);
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element pods.');
        }
        param1.writeVarInt(this.pods);
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element itemsValue.');
        }
        param1.writeVarInt(this.itemsValue);
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
    };
    TaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_TaxCollectorDialogQuestionExtendedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.maxPods = param1.readVarUhShort();
        if (this.maxPods < 0) {
            throw new Error('Forbidden value (' + this.maxPods + ') on element of TaxCollectorDialogQuestionExtendedMessage.maxPods.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of TaxCollectorDialogQuestionExtendedMessage.prospecting.');
        }
        this.wisdom = param1.readVarUhShort();
        if (this.wisdom < 0) {
            throw new Error('Forbidden value (' + this.wisdom + ') on element of TaxCollectorDialogQuestionExtendedMessage.wisdom.');
        }
        this.taxCollectorsCount = param1.readByte();
        if (this.taxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorsCount + ') on element of TaxCollectorDialogQuestionExtendedMessage.taxCollectorsCount.');
        }
        this.taxCollectorAttack = param1.readInt();
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of TaxCollectorDialogQuestionExtendedMessage.kamas.');
        }
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of TaxCollectorDialogQuestionExtendedMessage.experience.');
        }
        this.pods = param1.readVarUhInt();
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element of TaxCollectorDialogQuestionExtendedMessage.pods.');
        }
        this.itemsValue = param1.readVarUhInt();
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element of TaxCollectorDialogQuestionExtendedMessage.itemsValue.');
        }
    };
    TaxCollectorDialogQuestionExtendedMessage.ID = 5615;
    return TaxCollectorDialogQuestionExtendedMessage;
})(TaxCollectorDialogQuestionBasicMessage);
module.exports = TaxCollectorDialogQuestionExtendedMessage;
