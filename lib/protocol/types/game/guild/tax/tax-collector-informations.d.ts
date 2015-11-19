/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AdditionalTaxCollectorInformations = require('./additional-tax-collector-informations');
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
import EntityLook = require('../../look/entity-look');
declare class TaxCollectorInformations implements INetworkType {
    static ID: number;
    uniqueId: number;
    firtNameId: number;
    lastNameId: number;
    additionalInfos: AdditionalTaxCollectorInformations;
    worldX: number;
    worldY: number;
    subAreaId: number;
    state: number;
    look: EntityLook;
    complements: TaxCollectorComplementaryInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorInformations;
