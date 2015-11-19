/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PaddockSellBuyDialogMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6018;

    bsell: boolean;
    ownerId: number;
    price: number;

    constructor() {
        this.bsell = false;
        this.ownerId = 0;
        this.price = 0;
        super();
    }

    public getMessageId(): number {
        return PaddockSellBuyDialogMessage.ID;
    }

    public reset(): void {
        this.bsell = false;
        this.ownerId = 0;
        this.price = 0;
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
        this.serializeAs_PaddockSellBuyDialogMessage(param1);
    }

    public serializeAs_PaddockSellBuyDialogMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.bsell);
        if (this.ownerId < 0) {
            throw new Error('Forbidden value (' + this.ownerId + ') on element ownerId.');
        }
        param1.writeVarInt(this.ownerId);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockSellBuyDialogMessage(param1);
    }

    public deserializeAs_PaddockSellBuyDialogMessage(param1: ICustomDataInput): void {
        this.bsell = param1.readBoolean();
        this.ownerId = param1.readVarUhInt();
        if (this.ownerId < 0) {
            throw new Error('Forbidden value (' + this.ownerId + ') on element of PaddockSellBuyDialogMessage.ownerId.');
        }
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockSellBuyDialogMessage.price.');
        }

    }
}

export = PaddockSellBuyDialogMessage;
