/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import InteractiveElementSkill = require('./interactive-element-skill');
declare class InteractiveElement implements INetworkType {
    static ID: number;
    elementId: number;
    elementTypeId: number;
    enabledSkills: InteractiveElementSkill[];
    disabledSkills: InteractiveElementSkill[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_InteractiveElement(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_InteractiveElement(param1: ICustomDataInput): void;
}
export = InteractiveElement;
