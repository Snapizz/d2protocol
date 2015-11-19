/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import Item = require('./item');
import ObjectEffect = require('./effects/object-effect');
declare class ObjectItem extends Item implements INetworkType {
    static ID: number;
    position: number;
    objectGID: number;
    effects: ObjectEffect[];
    objectUID: number;
    quantity: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectItem(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectItem(param1: ICustomDataInput): void;
}
export = ObjectItem;
