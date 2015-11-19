/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class GameActionMarkedCell implements INetworkType {
    static ID: number;
    cellId: number;
    zoneSize: number;
    cellColor: number;
    cellsType: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionMarkedCell(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionMarkedCell(param1: ICustomDataInput): void;
}
export = GameActionMarkedCell;
