/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import MapCoordinatesAndId = require('./map-coordinates-and-id');

class MapCoordinatesExtended extends MapCoordinatesAndId implements INetworkType {
    public static ID: number = 176;

    subAreaId: number;

    constructor() {
        this.subAreaId = 0;
        super();
    }

    public getTypeId(): number {
        return MapCoordinatesExtended.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MapCoordinatesExtended(param1);
    }

    public serializeAs_MapCoordinatesExtended(param1: ICustomDataOutput): void {
        super.serializeAs_MapCoordinatesAndId(param1);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapCoordinatesExtended(param1);
    }

    public deserializeAs_MapCoordinatesExtended(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of MapCoordinatesExtended.subAreaId.');
        }

    }
}

export = MapCoordinatesExtended;
