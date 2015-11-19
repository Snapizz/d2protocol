/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterInformations = require('./game-fight-fighter-informations');
declare class GameFightCompanionInformations extends GameFightFighterInformations implements INetworkType {
    static ID: number;
    companionGenericId: number;
    level: number;
    masterId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightCompanionInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightCompanionInformations(param1: ICustomDataInput): void;
}
export = GameFightCompanionInformations;
