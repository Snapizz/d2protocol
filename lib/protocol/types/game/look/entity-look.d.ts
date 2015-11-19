/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import SubEntity = require('./sub-entity');
declare class EntityLook implements INetworkType {
    static ID: number;
    bonesId: number;
    skins: number[];
    indexedColors: number[];
    scales: number[];
    subentities: SubEntity[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_EntityLook(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_EntityLook(param1: ICustomDataInput): void;
}
export = EntityLook;
