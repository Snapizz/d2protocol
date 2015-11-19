/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class LockableShowCodeDialogMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5740;

    changeOrUse: boolean;
    codeSize: number;

    constructor() {
        this.changeOrUse = false;
        this.codeSize = 0;
        super();
    }

    public getMessageId(): number {
        return LockableShowCodeDialogMessage.ID;
    }

    public reset(): void {
        this.changeOrUse = false;
        this.codeSize = 0;
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
        this.serializeAs_LockableShowCodeDialogMessage(param1);
    }

    public serializeAs_LockableShowCodeDialogMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.changeOrUse);
        if (this.codeSize < 0) {
            throw new Error('Forbidden value (' + this.codeSize + ') on element codeSize.');
        }
        param1.writeByte(this.codeSize);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LockableShowCodeDialogMessage(param1);
    }

    public deserializeAs_LockableShowCodeDialogMessage(param1: ICustomDataInput): void {
        this.changeOrUse = param1.readBoolean();
        this.codeSize = param1.readByte();
        if (this.codeSize < 0) {
            throw new Error('Forbidden value (' + this.codeSize + ') on element of LockableShowCodeDialogMessage.codeSize.');
        }

    }
}

export = LockableShowCodeDialogMessage;
