/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AbstractContactInformations = require('./abstract-contact-informations');
declare class IgnoredInformations extends AbstractContactInformations implements INetworkType {
    static ID: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IgnoredInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IgnoredInformations(param1: ICustomDataInput): void;
}
export = IgnoredInformations;
