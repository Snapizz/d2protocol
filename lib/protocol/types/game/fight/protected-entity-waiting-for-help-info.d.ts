/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class ProtectedEntityWaitingForHelpInfo implements INetworkType {
    static ID: number;
    timeLeftBeforeFight: number;
    waitTimeForPlacement: number;
    nbPositionForDefensors: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataInput): void;
}
export = ProtectedEntityWaitingForHelpInfo;
