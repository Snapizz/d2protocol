/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterMinimalPlusLookInformations = require('../../character/character-minimal-plus-look-informations');
declare class TaxCollectorFightersInformation implements INetworkType {
    static ID: number;
    collectorId: number;
    allyCharactersInformations: CharacterMinimalPlusLookInformations[];
    enemyCharactersInformations: CharacterMinimalPlusLookInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorFightersInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorFightersInformation(param1: ICustomDataInput): void;
}
export = TaxCollectorFightersInformation;
