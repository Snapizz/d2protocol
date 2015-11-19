/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChallengeTargetUpdateMessage = (function (_super) {
    __extends(ChallengeTargetUpdateMessage, _super);
    function ChallengeTargetUpdateMessage() {
        this.challengeId = 0;
        this.targetId = 0;
        _super.call(this);
    }
    ChallengeTargetUpdateMessage.prototype.getMessageId = function () {
        return ChallengeTargetUpdateMessage.ID;
    };
    ChallengeTargetUpdateMessage.prototype.reset = function () {
        this.challengeId = 0;
        this.targetId = 0;
    };
    ChallengeTargetUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChallengeTargetUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChallengeTargetUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChallengeTargetUpdateMessage(param1);
    };
    ChallengeTargetUpdateMessage.prototype.serializeAs_ChallengeTargetUpdateMessage = function (param1) {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);
        param1.writeInt(this.targetId);
    };
    ChallengeTargetUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChallengeTargetUpdateMessage(param1);
    };
    ChallengeTargetUpdateMessage.prototype.deserializeAs_ChallengeTargetUpdateMessage = function (param1) {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeTargetUpdateMessage.challengeId.');
        }
        this.targetId = param1.readInt();
    };
    ChallengeTargetUpdateMessage.ID = 6123;
    return ChallengeTargetUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = ChallengeTargetUpdateMessage;
