/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PrismInformation = require('./prism-information');
import AllianceInformations = require('../context/roleplay/alliance-informations');
declare class AlliancePrismInformation extends PrismInformation implements INetworkType {
    static ID: number;
    alliance: AllianceInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AlliancePrismInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AlliancePrismInformation(param1: ICustomDataInput): void;
}
export = AlliancePrismInformation;
