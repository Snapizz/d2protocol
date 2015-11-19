/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import Item = require('./item');
declare class ObjectItemGenericQuantity extends Item implements INetworkType {
    static ID: number;
    objectGID: number;
    quantity: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectItemGenericQuantity(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectItemGenericQuantity(param1: ICustomDataInput): void;
}
export = ObjectItemGenericQuantity;
