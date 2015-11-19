/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class NotificationUpdateFlagMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6090;

    index: number;

    constructor() {
        this.index = 0;
        super();
    }

    public getMessageId(): number {
        return NotificationUpdateFlagMessage.ID;
    }

    public reset(): void {
        this.index = 0;
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
        this.serializeAs_NotificationUpdateFlagMessage(param1);
    }

    public serializeAs_NotificationUpdateFlagMessage(param1: ICustomDataOutput): void {
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeVarShort(this.index);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NotificationUpdateFlagMessage(param1);
    }

    public deserializeAs_NotificationUpdateFlagMessage(param1: ICustomDataInput): void {
        this.index = param1.readVarUhShort();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of NotificationUpdateFlagMessage.index.');
        }

    }
}

export = NotificationUpdateFlagMessage;
