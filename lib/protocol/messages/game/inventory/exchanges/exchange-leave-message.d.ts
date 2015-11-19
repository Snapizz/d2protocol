/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import LeaveDialogMessage = require('../../dialog/leave-dialog-message');
declare class ExchangeLeaveMessage extends LeaveDialogMessage {
    static ID: number;
    success: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeLeaveMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeLeaveMessage(param1: ICustomDataInput): void;
}
export = ExchangeLeaveMessage;
