/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GroupMonsterStaticInformations = require('./group-monster-static-informations');
import GameRolePlayGroupMonsterInformations = require('./game-role-play-group-monster-informations');
declare class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations implements INetworkType {
    static ID: number;
    nbWaves: number;
    alternatives: GroupMonsterStaticInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayGroupMonsterWaveInformations;
