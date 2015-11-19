/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../../custom-data-wrapper';
import PartyUpdateLightMessage = require('./../party-update-light-message');
declare class PartyCompanionUpdateLightMessage extends PartyUpdateLightMessage {
    static ID: number;
    indexId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyCompanionUpdateLightMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyCompanionUpdateLightMessage(param1: ICustomDataInput): void;
}
export = PartyCompanionUpdateLightMessage;
