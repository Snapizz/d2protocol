/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
declare class ContentPart implements INetworkType {
    static ID: number;
    id: string;
    state: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ContentPart(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ContentPart(param1: ICustomDataInput): void;
}
export = ContentPart;
