/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
declare class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations implements INetworkType {
    static ID: number;
    npcId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayTreasureHintInformations;
