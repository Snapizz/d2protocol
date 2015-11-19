/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
import GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
declare class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations implements INetworkType {
    static ID: number;
    sellType: number;
    options: HumanOption[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayMerchantInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayMerchantInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayMerchantInformations;
