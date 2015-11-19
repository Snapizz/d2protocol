/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../boolean-byte-wrapper');
var IdentificationSuccessMessage = (function (_super) {
    __extends(IdentificationSuccessMessage, _super);
    function IdentificationSuccessMessage() {
        this.login = '';
        this.nickname = '';
        this.accountId = 0;
        this.communityId = 0;
        this.hasRights = false;
        this.secretQuestion = '';
        this.accountCreation = 0;
        this.subscriptionElapsedDuration = 0;
        this.subscriptionEndDate = 0;
        this.wasAlreadyConnected = false;
        _super.call(this);
    }
    IdentificationSuccessMessage.prototype.getMessageId = function () {
        return IdentificationSuccessMessage.ID;
    };
    IdentificationSuccessMessage.prototype.reset = function () {
        this.login = '';
        this.nickname = '';
        this.accountId = 0;
        this.communityId = 0;
        this.hasRights = false;
        this.secretQuestion = '';
        this.accountCreation = 0;
        this.subscriptionElapsedDuration = 0;
        this.subscriptionEndDate = 0;
        this.wasAlreadyConnected = false;
    };
    IdentificationSuccessMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationSuccessMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationSuccessMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationSuccessMessage(param1);
    };
    IdentificationSuccessMessage.prototype.serializeAs_IdentificationSuccessMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasRights);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.wasAlreadyConnected);
        param1.writeByte(_loc2_);
        param1.writeUTF(this.login);
        param1.writeUTF(this.nickname);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        if (this.communityId < 0) {
            throw new Error('Forbidden value (' + this.communityId + ') on element communityId.');
        }
        param1.writeByte(this.communityId);
        param1.writeUTF(this.secretQuestion);
        if (this.accountCreation < 0 || this.accountCreation > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.accountCreation + ') on element accountCreation.');
        }
        param1.writeDouble(this.accountCreation);
        if (this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.subscriptionElapsedDuration + ') on element subscriptionElapsedDuration.');
        }
        param1.writeDouble(this.subscriptionElapsedDuration);
        if (this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.subscriptionEndDate + ') on element subscriptionEndDate.');
        }
        param1.writeDouble(this.subscriptionEndDate);
    };
    IdentificationSuccessMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationSuccessMessage(param1);
    };
    IdentificationSuccessMessage.prototype.deserializeAs_IdentificationSuccessMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.hasRights = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.wasAlreadyConnected = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.login = param1.readUTF();
        this.nickname = param1.readUTF();
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of IdentificationSuccessMessage.accountId.');
        }
        this.communityId = param1.readByte();
        if (this.communityId < 0) {
            throw new Error('Forbidden value (' + this.communityId + ') on element of IdentificationSuccessMessage.communityId.');
        }
        this.secretQuestion = param1.readUTF();
        this.accountCreation = param1.readDouble();
        if (this.accountCreation < 0 || this.accountCreation > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.accountCreation + ') on element of IdentificationSuccessMessage.accountCreation.');
        }
        this.subscriptionElapsedDuration = param1.readDouble();
        if (this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.subscriptionElapsedDuration + ') on element of IdentificationSuccessMessage.subscriptionElapsedDuration.');
        }
        this.subscriptionEndDate = param1.readDouble();
        if (this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.subscriptionEndDate + ') on element of IdentificationSuccessMessage.subscriptionEndDate.');
        }
    };
    IdentificationSuccessMessage.ID = 22;
    return IdentificationSuccessMessage;
})(network_message_1.NetworkMessage);
module.exports = IdentificationSuccessMessage;
