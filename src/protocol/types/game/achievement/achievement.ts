/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AchievementObjective = require('./achievement-objective');
import AchievementStartedObjective = require('./achievement-started-objective');

class Achievement implements INetworkType {
    public static ID: number = 363;

    id: number;
    finishedObjective: AchievementObjective[];
    startedObjectives: AchievementStartedObjective[];

    constructor() {
        this.id = 0;
        this.finishedObjective = [];
        this.startedObjectives = [];
    }

    public getTypeId(): number {
        return Achievement.ID;
    }

    public reset(): void {
        this.id = 0;
        this.finishedObjective = [];
        this.startedObjectives = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_Achievement(param1);
    }

    public serializeAs_Achievement(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        param1.writeShort(this.finishedObjective.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.finishedObjective.length) {
            (this.finishedObjective[_loc2_]).serializeAs_AchievementObjective(param1);
            _loc2_++;
        }
        param1.writeShort(this.startedObjectives.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.startedObjectives.length) {
            (this.startedObjectives[_loc3_]).serializeAs_AchievementStartedObjective(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_Achievement(param1);
    }

    public deserializeAs_Achievement(param1: ICustomDataInput): void {
        var _loc6_: AchievementObjective = null;
        var _loc7_: AchievementStartedObjective = null;
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of Achievement.id.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new AchievementObjective();
            _loc6_.deserialize(param1);
            this.finishedObjective.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = new AchievementStartedObjective();
            _loc7_.deserialize(param1);
            this.startedObjectives.push(_loc7_);
            _loc5_++;
        }

    }
}

export = Achievement;
