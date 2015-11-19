/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class IdentificationSuccessMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 22;

    login: string;
    nickname: string;
    accountId: number;
    communityId: number;
    hasRights: boolean;
    secretQuestion: string;
    accountCreation: number;
    subscriptionElapsedDuration: number;
    subscriptionEndDate: number;
    wasAlreadyConnected: boolean;

    constructor() {
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
        super();
    }

    public getMessageId(): number {
        return IdentificationSuccessMessage.ID;
    }

    public reset(): void {
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
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_IdentificationSuccessMessage(param1);
    }

    public serializeAs_IdentificationSuccessMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
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

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentificationSuccessMessage(param1);
    }

    public deserializeAs_IdentificationSuccessMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
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

    }
}

export = IdentificationSuccessMessage;
