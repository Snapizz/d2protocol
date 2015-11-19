/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
declare class HumanOptionObjectUse extends HumanOption implements INetworkType {
    static ID: number;
    delayTypeId: number;
    delayEndTime: number;
    objectGID: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionObjectUse(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionObjectUse(param1: ICustomDataInput): void;
}
export = HumanOptionObjectUse;
