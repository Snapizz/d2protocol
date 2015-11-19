/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import AdminCommandMessage = require('./admin-command-message');
declare class AdminQuietCommandMessage extends AdminCommandMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AdminQuietCommandMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AdminQuietCommandMessage(param1: ICustomDataInput): void;
}
export = AdminQuietCommandMessage;
