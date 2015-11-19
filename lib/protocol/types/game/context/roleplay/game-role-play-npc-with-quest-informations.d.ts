/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayNpcInformations = require('./game-role-play-npc-informations');
import GameRolePlayNpcQuestFlag = require('./quest/game-role-play-npc-quest-flag');
declare class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations implements INetworkType {
    static ID: number;
    questFlag: GameRolePlayNpcQuestFlag;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayNpcWithQuestInformations;
