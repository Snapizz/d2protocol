/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChallengeInfoMessage = (function (_super) {
    __extends(ChallengeInfoMessage, _super);
    function ChallengeInfoMessage() {
        this.challengeId = 0;
        this.targetId = 0;
        this.xpBonus = 0;
        this.dropBonus = 0;
        _super.call(this);
    }
    ChallengeInfoMessage.prototype.getMessageId = function () {
        return ChallengeInfoMessage.ID;
    };
    ChallengeInfoMessage.prototype.reset = function () {
        this.challengeId = 0;
        this.targetId = 0;
        this.xpBonus = 0;
        this.dropBonus = 0;
    };
    ChallengeInfoMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChallengeInfoMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChallengeInfoMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChallengeInfoMessage(param1);
    };
    ChallengeInfoMessage.prototype.serializeAs_ChallengeInfoMessage = function (param1) {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);
        param1.writeInt(this.targetId);
        if (this.xpBonus < 0) {
            throw new Error('Forbidden value (' + this.xpBonus + ') on element xpBonus.');
        }
        param1.writeVarInt(this.xpBonus);
        if (this.dropBonus < 0) {
            throw new Error('Forbidden value (' + this.dropBonus + ') on element dropBonus.');
        }
        param1.writeVarInt(this.dropBonus);
    };
    ChallengeInfoMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChallengeInfoMessage(param1);
    };
    ChallengeInfoMessage.prototype.deserializeAs_ChallengeInfoMessage = function (param1) {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeInfoMessage.challengeId.');
        }
        this.targetId = param1.readInt();
        this.xpBonus = param1.readVarUhInt();
        if (this.xpBonus < 0) {
            throw new Error('Forbidden value (' + this.xpBonus + ') on element of ChallengeInfoMessage.xpBonus.');
        }
        this.dropBonus = param1.readVarUhInt();
        if (this.dropBonus < 0) {
            throw new Error('Forbidden value (' + this.dropBonus + ') on element of ChallengeInfoMessage.dropBonus.');
        }
    };
    ChallengeInfoMessage.ID = 6022;
    return ChallengeInfoMessage;
})(network_message_1.NetworkMessage);
module.exports = ChallengeInfoMessage;
