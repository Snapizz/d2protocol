/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SymbioticObjectAssociateRequestMessage = require('./symbiotic-object-associate-request-message');
declare class MimicryObjectFeedAndAssociateRequestMessage extends SymbioticObjectAssociateRequestMessage {
    static ID: number;
    foodUID: number;
    foodPos: number;
    preview: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1: ICustomDataInput): void;
}
export = MimicryObjectFeedAndAssociateRequestMessage;
