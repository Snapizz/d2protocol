/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import InteractiveElement = require('./interactive-element');
declare class InteractiveElementWithAgeBonus extends InteractiveElement implements INetworkType {
    static ID: number;
    ageBonus: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataInput): void;
}
export = InteractiveElementWithAgeBonus;
