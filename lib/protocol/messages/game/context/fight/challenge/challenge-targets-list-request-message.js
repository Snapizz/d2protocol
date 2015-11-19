/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChallengeTargetsListRequestMessage = (function (_super) {
    __extends(ChallengeTargetsListRequestMessage, _super);
    function ChallengeTargetsListRequestMessage() {
        this.challengeId = 0;
        _super.call(this);
    }
    ChallengeTargetsListRequestMessage.prototype.getMessageId = function () {
        return ChallengeTargetsListRequestMessage.ID;
    };
    ChallengeTargetsListRequestMessage.prototype.reset = function () {
        this.challengeId = 0;
    };
    ChallengeTargetsListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChallengeTargetsListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChallengeTargetsListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChallengeTargetsListRequestMessage(param1);
    };
    ChallengeTargetsListRequestMessage.prototype.serializeAs_ChallengeTargetsListRequestMessage = function (param1) {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);
    };
    ChallengeTargetsListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChallengeTargetsListRequestMessage(param1);
    };
    ChallengeTargetsListRequestMessage.prototype.deserializeAs_ChallengeTargetsListRequestMessage = function (param1) {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeTargetsListRequestMessage.challengeId.');
        }
    };
    ChallengeTargetsListRequestMessage.ID = 5614;
    return ChallengeTargetsListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ChallengeTargetsListRequestMessage;
