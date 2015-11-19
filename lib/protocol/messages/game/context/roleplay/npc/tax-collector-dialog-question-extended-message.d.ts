/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TaxCollectorDialogQuestionBasicMessage = require('./tax-collector-dialog-question-basic-message');
declare class TaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionBasicMessage {
    static ID: number;
    maxPods: number;
    prospecting: number;
    wisdom: number;
    taxCollectorsCount: number;
    taxCollectorAttack: number;
    kamas: number;
    experience: number;
    pods: number;
    itemsValue: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataInput): void;
}
export = TaxCollectorDialogQuestionExtendedMessage;
