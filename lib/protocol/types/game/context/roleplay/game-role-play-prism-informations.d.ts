/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import PrismInformation = require('../../prism/prism-information');
declare class GameRolePlayPrismInformations extends GameRolePlayActorInformations implements INetworkType {
    static ID: number;
    prism: PrismInformation;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayPrismInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayPrismInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayPrismInformations;
