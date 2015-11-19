/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import MapCoordinates = require('./map-coordinates');
declare class MapCoordinatesAndId extends MapCoordinates implements INetworkType {
    static ID: number;
    mapId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapCoordinatesAndId(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapCoordinatesAndId(param1: ICustomDataInput): void;
}
export = MapCoordinatesAndId;
