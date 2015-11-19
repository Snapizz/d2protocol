/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Achievement = require('../../../types/game/achievement/achievement');

class AchievementDetailedListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6358;

    startedAchievements: Achievement[];
    finishedAchievements: Achievement[];

    constructor() {
        this.startedAchievements = [];
        this.finishedAchievements = [];
        super();
    }

    public getMessageId(): number {
        return AchievementDetailedListMessage.ID;
    }

    public reset(): void {
        this.startedAchievements = [];
        this.finishedAchievements = [];
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
        this.serializeAs_AchievementDetailedListMessage(param1);
    }

    public serializeAs_AchievementDetailedListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.startedAchievements.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.startedAchievements.length) {
            (this.startedAchievements[_loc2_]).serializeAs_Achievement(param1);
            _loc2_++;
        }
        param1.writeShort(this.finishedAchievements.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.finishedAchievements.length) {
            (this.finishedAchievements[_loc3_]).serializeAs_Achievement(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementDetailedListMessage(param1);
    }

    public deserializeAs_AchievementDetailedListMessage(param1: ICustomDataInput): void {
        var _loc6_: Achievement = null;
        var _loc7_: Achievement = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new Achievement();
            _loc6_.deserialize(param1);
            this.startedAchievements.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = new Achievement();
            _loc7_.deserialize(param1);
            this.finishedAchievements.push(_loc7_);
            _loc5_++;
        }

    }
}

export = AchievementDetailedListMessage;
