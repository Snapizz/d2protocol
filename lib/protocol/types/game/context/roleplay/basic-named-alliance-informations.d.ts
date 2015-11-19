/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import BasicAllianceInformations = require('./basic-alliance-informations');
declare class BasicNamedAllianceInformations extends BasicAllianceInformations implements INetworkType {
    static ID: number;
    allianceName: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_BasicNamedAllianceInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_BasicNamedAllianceInformations(param1: ICustomDataInput): void;
}
export = BasicNamedAllianceInformations;
