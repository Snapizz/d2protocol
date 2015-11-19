/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
declare class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations implements INetworkType {
    static ID: number;
    kamas: number;
    experience: number;
    pods: number;
    itemsValue: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorLootInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorLootInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorLootInformations;
