/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractTaxCollectorListMessage = require('./abstract-tax-collector-list-message');
declare class TopTaxCollectorListMessage extends AbstractTaxCollectorListMessage {
    static ID: number;
    isDungeon: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TopTaxCollectorListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TopTaxCollectorListMessage(param1: ICustomDataInput): void;
}
export = TopTaxCollectorListMessage;
