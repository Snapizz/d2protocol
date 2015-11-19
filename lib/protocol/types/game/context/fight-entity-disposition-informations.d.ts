/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import EntityDispositionInformations = require('./entity-disposition-informations');
declare class FightEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
    static ID: number;
    carryingCharacterId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightEntityDispositionInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightEntityDispositionInformations(param1: ICustomDataInput): void;
}
export = FightEntityDispositionInformations;
