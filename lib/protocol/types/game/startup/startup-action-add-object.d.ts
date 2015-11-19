/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ObjectItemInformationWithQuantity = require('../data/items/object-item-information-with-quantity');
declare class StartupActionAddObject implements INetworkType {
    static ID: number;
    uid: number;
    title: string;
    text: string;
    descUrl: string;
    pictureUrl: string;
    items: ObjectItemInformationWithQuantity[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_StartupActionAddObject(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_StartupActionAddObject(param1: ICustomDataInput): void;
}
export = StartupActionAddObject;
