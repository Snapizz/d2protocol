/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class HouseSellRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5697;

    amount: number;

    constructor() {
        this.amount = 0;
        super();
    }

    public getMessageId(): number {
        return HouseSellRequestMessage.ID;
    }

    public reset(): void {
        this.amount = 0;
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
        this.serializeAs_HouseSellRequestMessage(param1);
    }

    public serializeAs_HouseSellRequestMessage(param1: ICustomDataOutput): void {
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element amount.');
        }
        param1.writeVarInt(this.amount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseSellRequestMessage(param1);
    }

    public deserializeAs_HouseSellRequestMessage(param1: ICustomDataInput): void {
        this.amount = param1.readVarUhInt();
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element of HouseSellRequestMessage.amount.');
        }

    }
}

export = HouseSellRequestMessage;
