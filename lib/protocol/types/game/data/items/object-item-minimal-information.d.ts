/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import Item = require('./item');
import ObjectEffect = require('./effects/object-effect');
declare class ObjectItemMinimalInformation extends Item implements INetworkType {
    static ID: number;
    objectGID: number;
    effects: ObjectEffect[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectItemMinimalInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectItemMinimalInformation(param1: ICustomDataInput): void;
}
export = ObjectItemMinimalInformation;
