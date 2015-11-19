/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SkillActionDescriptionTimed = require('./skill-action-description-timed');
declare class SkillActionDescriptionCollect extends SkillActionDescriptionTimed implements INetworkType {
    static ID: number;
    min: number;
    max: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SkillActionDescriptionCollect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SkillActionDescriptionCollect(param1: ICustomDataInput): void;
}
export = SkillActionDescriptionCollect;
