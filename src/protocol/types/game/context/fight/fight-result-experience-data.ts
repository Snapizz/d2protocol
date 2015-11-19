/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultAdditionalData = require('./fight-result-additional-data');

class FightResultExperienceData extends FightResultAdditionalData implements INetworkType {
    public static ID: number = 192;

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

    constructor() {
        this.experience = 0;
        this.showExperience = false;
        this.experienceLevelFloor = 0;
        this.showExperienceLevelFloor = false;
        this.experienceNextLevelFloor = 0;
        this.showExperienceNextLevelFloor = false;
        this.experienceFightDelta = 0;
        this.showExperienceFightDelta = false;
        this.experienceForGuild = 0;
        this.showExperienceForGuild = false;
        this.experienceForMount = 0;
        this.showExperienceForMount = false;
        this.isIncarnationExperience = false;
        this.rerollExperienceMul = 0;
        super();
    }

    public getTypeId(): number {
        return FightResultExperienceData.ID;
    }

    public reset(): void {
        this.experience = 0;
        this.showExperience = false;
        this.experienceLevelFloor = 0;
        this.showExperienceLevelFloor = false;
        this.experienceNextLevelFloor = 0;
        this.showExperienceNextLevelFloor = false;
        this.experienceFightDelta = 0;
        this.showExperienceFightDelta = false;
        this.experienceForGuild = 0;
        this.showExperienceForGuild = false;
        this.experienceForMount = 0;
        this.showExperienceForMount = false;
        this.isIncarnationExperience = false;
        this.rerollExperienceMul = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultExperienceData(param1);
    }

    public serializeAs_FightResultExperienceData(param1: ICustomDataOutput): void {
        super.serializeAs_FightResultAdditionalData(param1);
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.showExperience);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.showExperienceLevelFloor);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.showExperienceNextLevelFloor);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.showExperienceFightDelta);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.showExperienceForGuild);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 5, this.showExperienceForMount);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 6, this.isIncarnationExperience);
        param1.writeByte(_loc2_);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceLevelFloor + ') on element experienceLevelFloor.');
        }
        param1.writeVarLong(this.experienceLevelFloor);
        if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceNextLevelFloor + ') on element experienceNextLevelFloor.');
        }
        param1.writeDouble(this.experienceNextLevelFloor);
        param1.writeVarInt(this.experienceFightDelta);
        if (this.experienceForGuild < 0) {
            throw new Error('Forbidden value (' + this.experienceForGuild + ') on element experienceForGuild.');
        }
        param1.writeVarInt(this.experienceForGuild);
        if (this.experienceForMount < 0) {
            throw new Error('Forbidden value (' + this.experienceForMount + ') on element experienceForMount.');
        }
        param1.writeVarInt(this.experienceForMount);
        if (this.rerollExperienceMul < 0) {
            throw new Error('Forbidden value (' + this.rerollExperienceMul + ') on element rerollExperienceMul.');
        }
        param1.writeByte(this.rerollExperienceMul);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultExperienceData(param1);
    }

    public deserializeAs_FightResultExperienceData(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readByte();
        this.showExperience = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.showExperienceLevelFloor = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.showExperienceNextLevelFloor = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.showExperienceFightDelta = BooleanByteWrapper.getFlag(_loc2_, 3);
        this.showExperienceForGuild = BooleanByteWrapper.getFlag(_loc2_, 4);
        this.showExperienceForMount = BooleanByteWrapper.getFlag(_loc2_, 5);
        this.isIncarnationExperience = BooleanByteWrapper.getFlag(_loc2_, 6);
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of FightResultExperienceData.experience.');
        }
        this.experienceLevelFloor = param1.readVarUhLong();
        if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceLevelFloor + ') on element of FightResultExperienceData.experienceLevelFloor.');
        }
        this.experienceNextLevelFloor = param1.readDouble();
        if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceNextLevelFloor + ') on element of FightResultExperienceData.experienceNextLevelFloor.');
        }
        this.experienceFightDelta = param1.readVarInt();
        this.experienceForGuild = param1.readVarUhInt();
        if (this.experienceForGuild < 0) {
            throw new Error('Forbidden value (' + this.experienceForGuild + ') on element of FightResultExperienceData.experienceForGuild.');
        }
        this.experienceForMount = param1.readVarUhInt();
        if (this.experienceForMount < 0) {
            throw new Error('Forbidden value (' + this.experienceForMount + ') on element of FightResultExperienceData.experienceForMount.');
        }
        this.rerollExperienceMul = param1.readByte();
        if (this.rerollExperienceMul < 0) {
            throw new Error('Forbidden value (' + this.rerollExperienceMul + ') on element of FightResultExperienceData.rerollExperienceMul.');
        }

    }
}

export = FightResultExperienceData;
