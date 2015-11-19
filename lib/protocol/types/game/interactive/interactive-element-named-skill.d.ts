/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import InteractiveElementSkill = require('./interactive-element-skill');
declare class InteractiveElementNamedSkill extends InteractiveElementSkill implements INetworkType {
    static ID: number;
    nameId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_InteractiveElementNamedSkill(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_InteractiveElementNamedSkill(param1: ICustomDataInput): void;
}
export = InteractiveElementNamedSkill;
