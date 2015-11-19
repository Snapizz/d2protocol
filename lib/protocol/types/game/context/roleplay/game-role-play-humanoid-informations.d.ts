/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanInformations = require('./human-informations');
import GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
declare class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations implements INetworkType {
    static ID: number;
    humanoidInfo: HumanInformations;
    accountId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayHumanoidInformations;
