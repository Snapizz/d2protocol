/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import EntityLook = require('./entity-look');
declare class IndexedEntityLook implements INetworkType {
    static ID: number;
    look: EntityLook;
    index: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IndexedEntityLook(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IndexedEntityLook(param1: ICustomDataInput): void;
}
export = IndexedEntityLook;
