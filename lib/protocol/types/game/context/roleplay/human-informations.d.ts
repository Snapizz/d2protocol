/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
import ActorRestrictionsInformations = require('../../character/restriction/actor-restrictions-informations');
declare class HumanInformations implements INetworkType {
    static ID: number;
    restrictions: ActorRestrictionsInformations;
    sex: boolean;
    options: HumanOption[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanInformations(param1: ICustomDataInput): void;
}
export = HumanInformations;
