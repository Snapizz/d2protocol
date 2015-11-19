/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterNamedInformations = require('./game-fight-fighter-named-informations');
declare class GameFightMutantInformations extends GameFightFighterNamedInformations implements INetworkType {
    static ID: number;
    powerLevel: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightMutantInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightMutantInformations(param1: ICustomDataInput): void;
}
export = GameFightMutantInformations;
