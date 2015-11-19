/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightMinimalStats = require('./game-fight-minimal-stats');
import GameContextActorInformations = require('./../game-context-actor-informations');
declare class GameFightFighterInformations extends GameContextActorInformations implements INetworkType {
    static ID: number;
    teamId: number;
    wave: number;
    alive: boolean;
    stats: GameFightMinimalStats;
    previousPositions: number[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightFighterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightFighterInformations(param1: ICustomDataInput): void;
}
export = GameFightFighterInformations;
