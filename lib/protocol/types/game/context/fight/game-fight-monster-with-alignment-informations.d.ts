/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightMonsterInformations = require('./game-fight-monster-informations');
import ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
declare class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations implements INetworkType {
    static ID: number;
    alignmentInfos: ActorAlignmentInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataInput): void;
}
export = GameFightMonsterWithAlignmentInformations;
