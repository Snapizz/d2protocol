/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterNamedInformations = require('./game-fight-fighter-named-informations');
import ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
declare class GameFightCharacterInformations extends GameFightFighterNamedInformations implements INetworkType {
    static ID: number;
    level: number;
    alignmentInfos: ActorAlignmentInformations;
    breed: number;
    sex: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightCharacterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightCharacterInformations(param1: ICustomDataInput): void;
}
export = GameFightCharacterInformations;
