/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PaddockToSellFilterMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6161;

    areaId: number;
    atLeastNbMount: number;
    atLeastNbMachine: number;
    maxPrice: number;

    constructor() {
        this.areaId = 0;
        this.atLeastNbMount = 0;
        this.atLeastNbMachine = 0;
        this.maxPrice = 0;
        super();
    }

    public getMessageId(): number {
        return PaddockToSellFilterMessage.ID;
    }

    public reset(): void {
        this.areaId = 0;
        this.atLeastNbMount = 0;
        this.atLeastNbMachine = 0;
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
        this.serializeAs_PaddockToSellFilterMessage(param1);
    }

    public serializeAs_PaddockToSellFilterMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.areaId);
        param1.writeByte(this.atLeastNbMount);
        param1.writeByte(this.atLeastNbMachine);
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element maxPrice.');
        }
        param1.writeVarInt(this.maxPrice);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockToSellFilterMessage(param1);
    }

    public deserializeAs_PaddockToSellFilterMessage(param1: ICustomDataInput): void {
        this.areaId = param1.readInt();
        this.atLeastNbMount = param1.readByte();
        this.atLeastNbMachine = param1.readByte();
        this.maxPrice = param1.readVarUhInt();
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element of PaddockToSellFilterMessage.maxPrice.');
        }

    }
}

export = PaddockToSellFilterMessage;
