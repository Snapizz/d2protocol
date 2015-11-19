/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class GameFightFighterLightInformations implements INetworkType {
    static ID: number;
    id: number;
    wave: number;
    level: number;
    breed: number;
    sex: boolean;
    alive: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightFighterLightInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightFighterLightInformations(param1: ICustomDataInput): void;
}
export = GameFightFighterLightInformations;
