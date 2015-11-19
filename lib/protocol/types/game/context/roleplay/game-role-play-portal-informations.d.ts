/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import PortalInformation = require('./treasureHunt/portal-information');
declare class GameRolePlayPortalInformations extends GameRolePlayActorInformations implements INetworkType {
    static ID: number;
    portal: PortalInformation;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayPortalInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayPortalInformations(param1: ICustomDataInput): void;
}
export = GameRolePlayPortalInformations;
