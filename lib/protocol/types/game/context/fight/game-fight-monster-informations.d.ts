/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightAIInformations = require('./game-fight-a-i-informations');
declare class GameFightMonsterInformations extends GameFightAIInformations implements INetworkType {
    static ID: number;
    creatureGenericId: number;
    creatureGrade: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightMonsterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightMonsterInformations(param1: ICustomDataInput): void;
}
export = GameFightMonsterInformations;
