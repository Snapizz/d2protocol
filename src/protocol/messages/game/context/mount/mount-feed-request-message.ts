/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountFeedRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6189;

    mountUid: number;
    mountLocation: number;
    mountFoodUid: number;
    quantity: number;

    constructor() {
        this.mountUid = 0;
        this.mountLocation = 0;
        this.mountFoodUid = 0;
        this.quantity = 0;
        super();
    }

    public getMessageId(): number {
        return MountFeedRequestMessage.ID;
    }

    public reset(): void {
        this.mountUid = 0;
        this.mountLocation = 0;
        this.mountFoodUid = 0;
        this.quantity = 0;
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
        this.serializeAs_MountFeedRequestMessage(param1);
    }

    public serializeAs_MountFeedRequestMessage(param1: ICustomDataOutput): void {
        if (this.mountUid < 0) {
            throw new Error('Forbidden value (' + this.mountUid + ') on element mountUid.');
        }
        param1.writeVarInt(this.mountUid);
        param1.writeByte(this.mountLocation);
        if (this.mountFoodUid < 0) {
            throw new Error('Forbidden value (' + this.mountFoodUid + ') on element mountFoodUid.');
        }
        param1.writeVarInt(this.mountFoodUid);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountFeedRequestMessage(param1);
    }

    public deserializeAs_MountFeedRequestMessage(param1: ICustomDataInput): void {
        this.mountUid = param1.readVarUhInt();
        if (this.mountUid < 0) {
            throw new Error('Forbidden value (' + this.mountUid + ') on element of MountFeedRequestMessage.mountUid.');
        }
        this.mountLocation = param1.readByte();
        this.mountFoodUid = param1.readVarUhInt();
        if (this.mountFoodUid < 0) {
            throw new Error('Forbidden value (' + this.mountFoodUid + ') on element of MountFeedRequestMessage.mountFoodUid.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of MountFeedRequestMessage.quantity.');
        }

    }
}

export = MountFeedRequestMessage;
