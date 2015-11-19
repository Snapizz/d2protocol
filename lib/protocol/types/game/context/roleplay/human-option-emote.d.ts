/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HumanOption = require('./human-option');
declare class HumanOptionEmote extends HumanOption implements INetworkType {
    static ID: number;
    emoteId: number;
    emoteStartTime: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionEmote(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionEmote(param1: ICustomDataInput): void;
}
export = HumanOptionEmote;
