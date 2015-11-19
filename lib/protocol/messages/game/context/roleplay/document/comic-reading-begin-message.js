/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ComicReadingBeginMessage = (function (_super) {
    __extends(ComicReadingBeginMessage, _super);
    function ComicReadingBeginMessage() {
        this.comicId = 0;
        _super.call(this);
    }
    ComicReadingBeginMessage.prototype.getMessageId = function () {
        return ComicReadingBeginMessage.ID;
    };
    ComicReadingBeginMessage.prototype.reset = function () {
        this.comicId = 0;
    };
    ComicReadingBeginMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ComicReadingBeginMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ComicReadingBeginMessage.prototype.serialize = function (param1) {
        this.serializeAs_ComicReadingBeginMessage(param1);
    };
    ComicReadingBeginMessage.prototype.serializeAs_ComicReadingBeginMessage = function (param1) {
        if (this.comicId < 0) {
            throw new Error('Forbidden value (' + this.comicId + ') on element comicId.');
        }
        param1.writeVarShort(this.comicId);
    };
    ComicReadingBeginMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ComicReadingBeginMessage(param1);
    };
    ComicReadingBeginMessage.prototype.deserializeAs_ComicReadingBeginMessage = function (param1) {
        this.comicId = param1.readVarUhShort();
        if (this.comicId < 0) {
            throw new Error('Forbidden value (' + this.comicId + ') on element of ComicReadingBeginMessage.comicId.');
        }
    };
    ComicReadingBeginMessage.ID = 6536;
    return ComicReadingBeginMessage;
})(network_message_1.NetworkMessage);
module.exports = ComicReadingBeginMessage;
