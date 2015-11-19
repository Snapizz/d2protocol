/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var AccountCapabilitiesMessage = (function (_super) {
    __extends(AccountCapabilitiesMessage, _super);
    function AccountCapabilitiesMessage() {
        this.accountId = 0;
        this.tutorialAvailable = false;
        this.breedsVisible = 0;
        this.breedsAvailable = 0;
        this.status = -1;
        this.canCreateNewCharacter = false;
        _super.call(this);
    }
    AccountCapabilitiesMessage.prototype.getMessageId = function () {
        return AccountCapabilitiesMessage.ID;
    };
    AccountCapabilitiesMessage.prototype.reset = function () {
        this.accountId = 0;
        this.tutorialAvailable = false;
        this.breedsVisible = 0;
        this.breedsAvailable = 0;
        this.status = -1;
        this.canCreateNewCharacter = false;
    };
    AccountCapabilitiesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AccountCapabilitiesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AccountCapabilitiesMessage.prototype.serialize = function (param1) {
        this.serializeAs_AccountCapabilitiesMessage(param1);
    };
    AccountCapabilitiesMessage.prototype.serializeAs_AccountCapabilitiesMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.tutorialAvailable);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canCreateNewCharacter);
        param1.writeByte(_loc2_);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        if (this.breedsVisible < 0 || this.breedsVisible > 65535) {
            throw new Error('Forbidden value (' + this.breedsVisible + ') on element breedsVisible.');
        }
        param1.writeShort(this.breedsVisible);
        if (this.breedsAvailable < 0 || this.breedsAvailable > 65535) {
            throw new Error('Forbidden value (' + this.breedsAvailable + ') on element breedsAvailable.');
        }
        param1.writeShort(this.breedsAvailable);
        param1.writeByte(this.status);
    };
    AccountCapabilitiesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AccountCapabilitiesMessage(param1);
    };
    AccountCapabilitiesMessage.prototype.deserializeAs_AccountCapabilitiesMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.tutorialAvailable = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.canCreateNewCharacter = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of AccountCapabilitiesMessage.accountId.');
        }
        this.breedsVisible = param1.readUnsignedShort();
        if (this.breedsVisible < 0 || this.breedsVisible > 65535) {
            throw new Error('Forbidden value (' + this.breedsVisible + ') on element of AccountCapabilitiesMessage.breedsVisible.');
        }
        this.breedsAvailable = param1.readUnsignedShort();
        if (this.breedsAvailable < 0 || this.breedsAvailable > 65535) {
            throw new Error('Forbidden value (' + this.breedsAvailable + ') on element of AccountCapabilitiesMessage.breedsAvailable.');
        }
        this.status = param1.readByte();
    };
    AccountCapabilitiesMessage.ID = 6216;
    return AccountCapabilitiesMessage;
})(network_message_1.NetworkMessage);
module.exports = AccountCapabilitiesMessage;
