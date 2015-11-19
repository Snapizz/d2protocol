/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AchievementRewardable = require('../../../types/game/achievement/achievement-rewardable');

class AchievementListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6205;

    finishedAchievementsIds: number[];
    rewardableAchievements: AchievementRewardable[];

    constructor() {
        this.finishedAchievementsIds = [];
        this.rewardableAchievements = [];
        super();
    }

    public getMessageId(): number {
        return AchievementListMessage.ID;
    }

    public reset(): void {
        this.finishedAchievementsIds = [];
        this.rewardableAchievements = [];
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AchievementListMessage(param1);
    }

    public serializeAs_AchievementListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.finishedAchievementsIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.finishedAchievementsIds.length) {
            if (this.finishedAchievementsIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.finishedAchievementsIds[_loc2_] + ') on element 1 (starting at 1) of finishedAchievementsIds.');
            }
            param1.writeVarShort(this.finishedAchievementsIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.rewardableAchievements.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.rewardableAchievements.length) {
            (this.rewardableAchievements[_loc3_]).serializeAs_AchievementRewardable(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementListMessage(param1);
    }

    public deserializeAs_AchievementListMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: AchievementRewardable = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of finishedAchievementsIds.');
            }
            this.finishedAchievementsIds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = new AchievementRewardable();
            _loc7_.deserialize(param1);
            this.rewardableAchievements.push(_loc7_);
            _loc5_++;
        }

    }
}

export = AchievementListMessage;
