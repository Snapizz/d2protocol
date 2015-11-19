/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class HouseToSellFilterMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6137;

    areaId: number;
    atLeastNbRoom: number;
    atLeastNbChest: number;
    skillRequested: number;
    maxPrice: number;

    constructor() {
        this.areaId = 0;
        this.atLeastNbRoom = 0;
        this.atLeastNbChest = 0;
        this.skillRequested = 0;
        this.maxPrice = 0;
        super();
    }

    public getMessageId(): number {
        return HouseToSellFilterMessage.ID;
    }

    public reset(): void {
        this.areaId = 0;
        this.atLeastNbRoom = 0;
        this.atLeastNbChest = 0;
        this.skillRequested = 0;
        this.maxPrice = 0;
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
        this.serializeAs_HouseToSellFilterMessage(param1);
    }

    public serializeAs_HouseToSellFilterMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.areaId);
        if (this.atLeastNbRoom < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbRoom + ') on element atLeastNbRoom.');
        }
        param1.writeByte(this.atLeastNbRoom);
        if (this.atLeastNbChest < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbChest + ') on element atLeastNbChest.');
        }
        param1.writeByte(this.atLeastNbChest);
        if (this.skillRequested < 0) {
            throw new Error('Forbidden value (' + this.skillRequested + ') on element skillRequested.');
        }
        param1.writeVarShort(this.skillRequested);
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element maxPrice.');
        }
        param1.writeVarInt(this.maxPrice);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseToSellFilterMessage(param1);
    }

    public deserializeAs_HouseToSellFilterMessage(param1: ICustomDataInput): void {
        this.areaId = param1.readInt();
        this.atLeastNbRoom = param1.readByte();
        if (this.atLeastNbRoom < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbRoom + ') on element of HouseToSellFilterMessage.atLeastNbRoom.');
        }
        this.atLeastNbChest = param1.readByte();
        if (this.atLeastNbChest < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbChest + ') on element of HouseToSellFilterMessage.atLeastNbChest.');
        }
        this.skillRequested = param1.readVarUhShort();
        if (this.skillRequested < 0) {
            throw new Error('Forbidden value (' + this.skillRequested + ') on element of HouseToSellFilterMessage.skillRequested.');
        }
        this.maxPrice = param1.readVarUhInt();
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element of HouseToSellFilterMessage.maxPrice.');
        }

    }
}

export = HouseToSellFilterMessage;
