/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');
declare class GameFightFighterCompanionLightInformations extends GameFightFighterLightInformations implements INetworkType {
    static ID: number;
    companionId: number;
    masterId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataInput): void;
}
export = GameFightFighterCompanionLightInformations;
