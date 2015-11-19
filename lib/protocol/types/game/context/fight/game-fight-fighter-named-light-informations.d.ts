/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');
declare class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations implements INetworkType {
    static ID: number;
    name: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataInput): void;
}
export = GameFightFighterNamedLightInformations;
