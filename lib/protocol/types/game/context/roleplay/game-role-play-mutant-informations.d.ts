/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayHumanoidInformations = require('./game-role-play-humanoid-informations');
declare class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations implements INetworkType {
    static ID: number;
    monsterId: number;
    powerLevel: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayMutantInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayMutantInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayMutantInformations;
