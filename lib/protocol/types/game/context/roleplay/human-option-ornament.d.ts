/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
declare class HumanOptionOrnament extends HumanOption implements INetworkType {
    static ID: number;
    ornamentId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionOrnament(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionOrnament(param1: ICustomDataInput): void;
}
export = HumanOptionOrnament;
