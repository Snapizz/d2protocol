/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import TaxCollectorStaticInformations = require('./tax-collector-static-informations');
import AllianceInformations = require('./roleplay/alliance-informations');
declare class TaxCollectorStaticExtendedInformations extends TaxCollectorStaticInformations implements INetworkType {
    static ID: number;
    allianceIdentity: AllianceInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorStaticExtendedInformations;
