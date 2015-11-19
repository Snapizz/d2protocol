/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PurchasableDialogMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5739;

    buyOrSell: boolean;
    purchasableId: number;
    price: number;

    constructor() {
        this.buyOrSell = false;
        this.purchasableId = 0;
        this.price = 0;
        super();
    }

    public getMessageId(): number {
        return PurchasableDialogMessage.ID;
    }

    public reset(): void {
        this.buyOrSell = false;
        this.purchasableId = 0;
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
        this.serializeAs_PurchasableDialogMessage(param1);
    }

    public serializeAs_PurchasableDialogMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.buyOrSell);
        if (this.purchasableId < 0) {
            throw new Error('Forbidden value (' + this.purchasableId + ') on element purchasableId.');
        }
        param1.writeVarInt(this.purchasableId);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PurchasableDialogMessage(param1);
    }

    public deserializeAs_PurchasableDialogMessage(param1: ICustomDataInput): void {
        this.buyOrSell = param1.readBoolean();
        this.purchasableId = param1.readVarUhInt();
        if (this.purchasableId < 0) {
            throw new Error('Forbidden value (' + this.purchasableId + ') on element of PurchasableDialogMessage.purchasableId.');
        }
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PurchasableDialogMessage.price.');
        }

    }
}

export = PurchasableDialogMessage;
