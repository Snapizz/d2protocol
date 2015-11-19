/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class TaxCollectorBasicInformations implements INetworkType {
    static ID: number;
    firstNameId: number;
    lastNameId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorBasicInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorBasicInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorBasicInformations;
