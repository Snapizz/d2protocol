/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class PaddockBuyResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6516;

    paddockId: number;
    bought: boolean;
    realPrice: number;

    constructor() {
        this.paddockId = 0;
        this.bought = false;
        this.realPrice = 0;
        super();
    }

    public getMessageId(): number {
        return PaddockBuyResultMessage.ID;
    }

    public reset(): void {
        this.paddockId = 0;
        this.bought = false;
        this.realPrice = 0;
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
        this.serializeAs_PaddockBuyResultMessage(param1);
    }

    public serializeAs_PaddockBuyResultMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.paddockId);
        param1.writeBoolean(this.bought);
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element realPrice.');
        }
        param1.writeVarInt(this.realPrice);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockBuyResultMessage(param1);
    }

    public deserializeAs_PaddockBuyResultMessage(param1: ICustomDataInput): void {
        this.paddockId = param1.readInt();
        this.bought = param1.readBoolean();
        this.realPrice = param1.readVarUhInt();
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element of PaddockBuyResultMessage.realPrice.');
        }

    }
}

export = PaddockBuyResultMessage;
