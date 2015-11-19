/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AchievementRewardable = require('../../../types/game/achievement/achievement-rewardable');
declare class AchievementListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    finishedAchievementsIds: number[];
    rewardableAchievements: AchievementRewardable[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AchievementListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AchievementListMessage(param1: ICustomDataInput): void;
}
export = AchievementListMessage;
