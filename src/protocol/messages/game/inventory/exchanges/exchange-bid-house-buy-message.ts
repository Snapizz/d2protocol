/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHouseBuyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5804;

    uid: number;
    qty: number;
    price: number;

    constructor() {
        this.uid = 0;
        this.qty = 0;
        this.price = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseBuyMessage.ID;
    }

    public reset(): void {
        this.uid = 0;
        this.qty = 0;
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
        this.serializeAs_ExchangeBidHouseBuyMessage(param1);
    }

    public serializeAs_ExchangeBidHouseBuyMessage(param1: ICustomDataOutput): void {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
        if (this.qty < 0) {
            throw new Error('Forbidden value (' + this.qty + ') on element qty.');
        }
        param1.writeVarInt(this.qty);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseBuyMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseBuyMessage(param1: ICustomDataInput): void {
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of ExchangeBidHouseBuyMessage.uid.');
        }
        this.qty = param1.readVarUhInt();
        if (this.qty < 0) {
            throw new Error('Forbidden value (' + this.qty + ') on element of ExchangeBidHouseBuyMessage.qty.');
        }
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of ExchangeBidHouseBuyMessage.price.');
        }

    }
}

export = ExchangeBidHouseBuyMessage;
