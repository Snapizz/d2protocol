/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
declare class HumanOptionTitle extends HumanOption implements INetworkType {
    static ID: number;
    titleId: number;
    titleParam: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionTitle(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionTitle(param1: ICustomDataInput): void;
}
export = HumanOptionTitle;
