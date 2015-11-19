/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class PresetItem implements INetworkType {
    public static ID: number = 354;

    position: number;
    objGid: number;
    objUid: number;

    constructor() {
        this.position = 63;
        this.objGid = 0;
        this.objUid = 0;
    }

    public getTypeId(): number {
        return PresetItem.ID;
    }

    public reset(): void {
        this.position = 63;
        this.objGid = 0;
        this.objUid = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PresetItem(param1);
    }

    public serializeAs_PresetItem(param1: ICustomDataOutput): void {
        param1.writeByte(this.position);
        if (this.objGid < 0) {
            throw new Error('Forbidden value (' + this.objGid + ') on element objGid.');
        }
        param1.writeVarShort(this.objGid);
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element objUid.');
        }
        param1.writeVarInt(this.objUid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PresetItem(param1);
    }

    public deserializeAs_PresetItem(param1: ICustomDataInput): void {
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of PresetItem.position.');
        }
        this.objGid = param1.readVarUhShort();
        if (this.objGid < 0) {
            throw new Error('Forbidden value (' + this.objGid + ') on element of PresetItem.objGid.');
        }
        this.objUid = param1.readVarUhInt();
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element of PresetItem.objUid.');
        }

    }
}

export = PresetItem;
