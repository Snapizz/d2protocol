/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AllianceInformations = require('../context/roleplay/alliance-informations');
declare class AllianceFactSheetInformations extends AllianceInformations implements INetworkType {
    static ID: number;
    creationDate: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceFactSheetInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceFactSheetInformations(param1: ICustomDataInput): void;
}
export = AllianceFactSheetInformations;
