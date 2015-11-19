/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class FriendDeleteRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5603;

    accountId: number;

    constructor() {
        this.accountId = 0;
        super();
    }

    public getMessageId(): number {
        return FriendDeleteRequestMessage.ID;
    }

    public reset(): void {
        this.accountId = 0;
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
        this.serializeAs_FriendDeleteRequestMessage(param1);
    }

    public serializeAs_FriendDeleteRequestMessage(param1: ICustomDataOutput): void {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendDeleteRequestMessage(param1);
    }

    public deserializeAs_FriendDeleteRequestMessage(param1: ICustomDataInput): void {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of FriendDeleteRequestMessage.accountId.');
        }

    }
}

export = FriendDeleteRequestMessage;
