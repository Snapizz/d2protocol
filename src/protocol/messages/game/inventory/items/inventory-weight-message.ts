/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryWeightMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 3009;

    weight: number;
    weightMax: number;

    constructor() {
        this.weight = 0;
        this.weightMax = 0;
        super();
    }

    public getMessageId(): number {
        return InventoryWeightMessage.ID;
    }

    public reset(): void {
        this.weight = 0;
        this.weightMax = 0;
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
        this.serializeAs_InventoryWeightMessage(param1);
    }

    public serializeAs_InventoryWeightMessage(param1: ICustomDataOutput): void {
        if (this.weight < 0) {
            throw new Error('Forbidden value (' + this.weight + ') on element weight.');
        }
        param1.writeVarInt(this.weight);
        if (this.weightMax < 0) {
            throw new Error('Forbidden value (' + this.weightMax + ') on element weightMax.');
        }
        param1.writeVarInt(this.weightMax);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryWeightMessage(param1);
    }

    public deserializeAs_InventoryWeightMessage(param1: ICustomDataInput): void {
        this.weight = param1.readVarUhInt();
        if (this.weight < 0) {
            throw new Error('Forbidden value (' + this.weight + ') on element of InventoryWeightMessage.weight.');
        }
        this.weightMax = param1.readVarUhInt();
        if (this.weightMax < 0) {
            throw new Error('Forbidden value (' + this.weightMax + ') on element of InventoryWeightMessage.weightMax.');
        }

    }
}

export = InventoryWeightMessage;
