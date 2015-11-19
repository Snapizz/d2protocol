/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SkillActionDescription = require('./skill-action-description');
declare class SkillActionDescriptionTimed extends SkillActionDescription implements INetworkType {
    static ID: number;
    time: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SkillActionDescriptionTimed(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SkillActionDescriptionTimed(param1: ICustomDataInput): void;
}
export = SkillActionDescriptionTimed;
