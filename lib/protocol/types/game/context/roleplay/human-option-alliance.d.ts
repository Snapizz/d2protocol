/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AllianceInformations = require('./alliance-informations');
import HumanOption = require('./human-option');
declare class HumanOptionAlliance extends HumanOption implements INetworkType {
    static ID: number;
    allianceInformations: AllianceInformations;
    aggressable: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionAlliance(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionAlliance(param1: ICustomDataInput): void;
}
export = HumanOptionAlliance;
