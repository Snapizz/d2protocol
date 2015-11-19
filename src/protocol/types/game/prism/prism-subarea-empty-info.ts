/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismSubareaEmptyInfo implements INetworkType {
    public static ID: number = 438;

    subAreaId: number;
    allianceId: number;

    constructor() {
        this.subAreaId = 0;
        this.allianceId = 0;
    }

    public getTypeId(): number {
        return PrismSubareaEmptyInfo.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.allianceId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PrismSubareaEmptyInfo(param1);
    }

    public serializeAs_PrismSubareaEmptyInfo(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismSubareaEmptyInfo(param1);
    }

    public deserializeAs_PrismSubareaEmptyInfo(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSubareaEmptyInfo.subAreaId.');
        }
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of PrismSubareaEmptyInfo.allianceId.');
        }

    }
}

export = PrismSubareaEmptyInfo;
