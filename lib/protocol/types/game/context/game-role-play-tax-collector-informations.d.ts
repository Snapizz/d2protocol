/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import TaxCollectorStaticInformations = require('./tax-collector-static-informations');
import GameRolePlayActorInformations = require('./roleplay/game-role-play-actor-informations');
declare class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations implements INetworkType {
    static ID: number;
    identification: TaxCollectorStaticInformations;
    guildLevel: number;
    taxCollectorAttack: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayTaxCollectorInformations;
