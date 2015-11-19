/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AlignmentRankUpdateMessage = (function (_super) {
    __extends(AlignmentRankUpdateMessage, _super);
    function AlignmentRankUpdateMessage() {
        this.alignmentRank = 0;
        this.verbose = false;
        _super.call(this);
    }
    AlignmentRankUpdateMessage.prototype.getMessageId = function () {
        return AlignmentRankUpdateMessage.ID;
    };
    AlignmentRankUpdateMessage.prototype.reset = function () {
        this.alignmentRank = 0;
        this.verbose = false;
    };
    AlignmentRankUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AlignmentRankUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AlignmentRankUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_AlignmentRankUpdateMessage(param1);
    };
    AlignmentRankUpdateMessage.prototype.serializeAs_AlignmentRankUpdateMessage = function (param1) {
        if (this.alignmentRank < 0) {
            throw new Error('Forbidden value (' + this.alignmentRank + ') on element alignmentRank.');
        }
        param1.writeByte(this.alignmentRank);
        param1.writeBoolean(this.verbose);
    };
    AlignmentRankUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AlignmentRankUpdateMessage(param1);
    };
    AlignmentRankUpdateMessage.prototype.deserializeAs_AlignmentRankUpdateMessage = function (param1) {
        this.alignmentRank = param1.readByte();
        if (this.alignmentRank < 0) {
            throw new Error('Forbidden value (' + this.alignmentRank + ') on element of AlignmentRankUpdateMessage.alignmentRank.');
        }
        this.verbose = param1.readBoolean();
    };
    AlignmentRankUpdateMessage.ID = 6058;
    return AlignmentRankUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = AlignmentRankUpdateMessage;
