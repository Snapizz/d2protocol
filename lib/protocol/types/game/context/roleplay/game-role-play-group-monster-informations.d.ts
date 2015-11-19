/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GroupMonsterStaticInformations = require('./group-monster-static-informations');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
declare class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations implements INetworkType {
    static ID: number;
    staticInfos: GroupMonsterStaticInformations;
    creationTime: number;
    ageBonusRate: number;
    lootShare: number;
    alignmentSide: number;
    keyRingBonus: boolean;
    hasHardcoreDrop: boolean;
    hasAVARewardToken: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayGroupMonsterInformations;
