/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightResultAdditionalData = require('./fight-result-additional-data');
declare class FightResultExperienceData extends FightResultAdditionalData implements INetworkType {
    static ID: number;
    experience: number;
    showExperience: boolean;
    experienceLevelFloor: number;
    showExperienceLevelFloor: boolean;
    experienceNextLevelFloor: number;
    showExperienceNextLevelFloor: boolean;
    experienceFightDelta: number;
    showExperienceFightDelta: boolean;
    experienceForGuild: number;
    showExperienceForGuild: boolean;
    experienceForMount: number;
    showExperienceForMount: boolean;
    isIncarnationExperience: boolean;
    rerollExperienceMul: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightResultExperienceData(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightResultExperienceData(param1: ICustomDataInput): void;
}
export = FightResultExperienceData;
