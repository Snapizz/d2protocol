/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import MapCoordinates = require('./map-coordinates');

class MapCoordinatesAndId extends MapCoordinates implements INetworkType {
    public static ID: number = 392;

    mapId: number;

    constructor() {
        this.mapId = 0;
        super();
    }

    public getTypeId(): number {
        return MapCoordinatesAndId.ID;
    }

    public reset(): void {
        this.mapId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MapCoordinatesAndId(param1);
    }

    public serializeAs_MapCoordinatesAndId(param1: ICustomDataOutput): void {
        super.serializeAs_MapCoordinates(param1);
        param1.writeInt(this.mapId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapCoordinatesAndId(param1);
    }

    public deserializeAs_MapCoordinatesAndId(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.mapId = param1.readInt();

    }
}

export = MapCoordinatesAndId;
