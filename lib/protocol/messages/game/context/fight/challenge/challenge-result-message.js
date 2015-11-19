/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChallengeResultMessage = (function (_super) {
    __extends(ChallengeResultMessage, _super);
    function ChallengeResultMessage() {
        this.challengeId = 0;
        this.success = false;
        _super.call(this);
    }
    ChallengeResultMessage.prototype.getMessageId = function () {
        return ChallengeResultMessage.ID;
    };
    ChallengeResultMessage.prototype.reset = function () {
        this.challengeId = 0;
        this.success = false;
    };
    ChallengeResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChallengeResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChallengeResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChallengeResultMessage(param1);
    };
    ChallengeResultMessage.prototype.serializeAs_ChallengeResultMessage = function (param1) {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);
        param1.writeBoolean(this.success);
    };
    ChallengeResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChallengeResultMessage(param1);
    };
    ChallengeResultMessage.prototype.deserializeAs_ChallengeResultMessage = function (param1) {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeResultMessage.challengeId.');
        }
        this.success = param1.readBoolean();
    };
    ChallengeResultMessage.ID = 6019;
    return ChallengeResultMessage;
})(network_message_1.NetworkMessage);
module.exports = ChallengeResultMessage;
