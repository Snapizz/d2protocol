/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class KrosmasterFigure implements INetworkType {
    static ID: number;
    uid: string;
    figure: number;
    pedestal: number;
    bound: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_KrosmasterFigure(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_KrosmasterFigure(param1: ICustomDataInput): void;
}
export = KrosmasterFigure;
