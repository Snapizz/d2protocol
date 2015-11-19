/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
declare class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations implements INetworkType {
    static ID: number;
    ownerName: string;
    level: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayMountInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayMountInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayMountInformations;
