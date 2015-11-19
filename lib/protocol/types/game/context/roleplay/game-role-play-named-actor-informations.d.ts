/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
declare class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations implements INetworkType {
    static ID: number;
    name: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayNamedActorInformations;
