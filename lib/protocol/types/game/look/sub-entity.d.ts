/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import EntityLook = require('./entity-look');
declare class SubEntity implements INetworkType {
    static ID: number;
    bindingPointCategory: number;
    bindingPointIndex: number;
    subEntityLook: EntityLook;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SubEntity(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SubEntity(param1: ICustomDataInput): void;
}
export = SubEntity;
