/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class HouseSoldMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5737;

    houseId: number;
    realPrice: number;
    buyerName: string;

    constructor() {
        this.houseId = 0;
        this.realPrice = 0;
        this.buyerName = '';
        super();
    }

    public getMessageId(): number {
        return HouseSoldMessage.ID;
    }

    public reset(): void {
        this.houseId = 0;
        this.realPrice = 0;
        this.buyerName = '';
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
        this.serializeAs_HouseSoldMessage(param1);
    }

    public serializeAs_HouseSoldMessage(param1: ICustomDataOutput): void {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element realPrice.');
        }
        param1.writeVarInt(this.realPrice);
        param1.writeUTF(this.buyerName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseSoldMessage(param1);
    }

    public deserializeAs_HouseSoldMessage(param1: ICustomDataInput): void {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseSoldMessage.houseId.');
        }
        this.realPrice = param1.readVarUhInt();
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element of HouseSoldMessage.realPrice.');
        }
        this.buyerName = param1.readUTF();

    }
}

export = HouseSoldMessage;
