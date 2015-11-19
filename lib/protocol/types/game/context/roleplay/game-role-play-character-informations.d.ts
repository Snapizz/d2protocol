/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayHumanoidInformations = require('./game-role-play-humanoid-informations');
import ActorAlignmentInformations = require('../../character/alignment/actor-alignment-informations');
declare class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations implements INetworkType {
    static ID: number;
    alignmentInfos: ActorAlignmentInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayCharacterInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayCharacterInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayCharacterInformations;
