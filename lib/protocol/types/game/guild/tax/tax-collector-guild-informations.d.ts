/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
import BasicGuildInformations = require('../../context/roleplay/basic-guild-informations');
declare class TaxCollectorGuildInformations extends TaxCollectorComplementaryInformations implements INetworkType {
    static ID: number;
    guild: BasicGuildInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorGuildInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorGuildInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorGuildInformations;
