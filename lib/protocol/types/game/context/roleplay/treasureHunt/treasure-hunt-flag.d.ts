/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class TreasureHuntFlag implements INetworkType {
    static ID: number;
    mapId: number;
    state: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TreasureHuntFlag(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TreasureHuntFlag(param1: ICustomDataInput): void;
}
export = TreasureHuntFlag;
