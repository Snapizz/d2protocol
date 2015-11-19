/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DocumentReadingBeginMessage = (function (_super) {
    __extends(DocumentReadingBeginMessage, _super);
    function DocumentReadingBeginMessage() {
        this.documentId = 0;
        _super.call(this);
    }
    DocumentReadingBeginMessage.prototype.getMessageId = function () {
        return DocumentReadingBeginMessage.ID;
    };
    DocumentReadingBeginMessage.prototype.reset = function () {
        this.documentId = 0;
    };
    DocumentReadingBeginMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DocumentReadingBeginMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DocumentReadingBeginMessage.prototype.serialize = function (param1) {
        this.serializeAs_DocumentReadingBeginMessage(param1);
    };
    DocumentReadingBeginMessage.prototype.serializeAs_DocumentReadingBeginMessage = function (param1) {
        if (this.documentId < 0) {
            throw new Error('Forbidden value (' + this.documentId + ') on element documentId.');
        }
        param1.writeVarShort(this.documentId);
    };
    DocumentReadingBeginMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DocumentReadingBeginMessage(param1);
    };
    DocumentReadingBeginMessage.prototype.deserializeAs_DocumentReadingBeginMessage = function (param1) {
        this.documentId = param1.readVarUhShort();
        if (this.documentId < 0) {
            throw new Error('Forbidden value (' + this.documentId + ') on element of DocumentReadingBeginMessage.documentId.');
        }
    };
    DocumentReadingBeginMessage.ID = 5675;
    return DocumentReadingBeginMessage;
})(network_message_1.NetworkMessage);
module.exports = DocumentReadingBeginMessage;
