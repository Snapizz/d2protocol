/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MapCoordinatesExtended = require('./../map-coordinates-extended');
declare class AtlasPointsInformations implements INetworkType {
    static ID: number;
    type: number;
    coords: MapCoordinatesExtended[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AtlasPointsInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AtlasPointsInformations(param1: ICustomDataInput): void;
}
export = AtlasPointsInformations;
