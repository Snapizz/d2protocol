/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class PartyMemberGeoPosition implements INetworkType {
    static ID: number;
    memberId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyMemberGeoPosition(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyMemberGeoPosition(param1: ICustomDataInput): void;
}
export = PartyMemberGeoPosition;
