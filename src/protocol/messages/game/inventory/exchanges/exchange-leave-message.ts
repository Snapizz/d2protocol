/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import LeaveDialogMessage = require('../../dialog/leave-dialog-message');

class ExchangeLeaveMessage extends LeaveDialogMessage {
    public static ID: number = 5628;

    success: boolean;

    constructor() {
        this.success = false;
        super();
    }

    public getMessageId(): number {
        return ExchangeLeaveMessage.ID;
    }

    public reset(): void {
        this.success = false;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ExchangeLeaveMessage(param1);
    }

    public serializeAs_ExchangeLeaveMessage(param1: ICustomDataOutput): void {
        super.serializeAs_LeaveDialogMessage(param1);
        param1.writeBoolean(this.success);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeLeaveMessage(param1);
    }

    public deserializeAs_ExchangeLeaveMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.success = param1.readBoolean();

    }
}

export = ExchangeLeaveMessage;
