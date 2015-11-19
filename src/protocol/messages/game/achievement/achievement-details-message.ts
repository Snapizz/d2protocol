/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Achievement = require('../../../types/game/achievement/achievement');

class AchievementDetailsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6378;

    achievement: Achievement;

    constructor() {
        this.achievement = new Achievement();
        super();
    }

    public getMessageId(): number {
        return AchievementDetailsMessage.ID;
    }

    public reset(): void {
        this.achievement = new Achievement();
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
        this.serializeAs_AchievementDetailsMessage(param1);
    }

    public serializeAs_AchievementDetailsMessage(param1: ICustomDataOutput): void {
        this.achievement.serializeAs_Achievement(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementDetailsMessage(param1);
    }

    public deserializeAs_AchievementDetailsMessage(param1: ICustomDataInput): void {
        this.achievement = new Achievement();
        this.achievement.deserialize(param1);

    }
}

export = AchievementDetailsMessage;
