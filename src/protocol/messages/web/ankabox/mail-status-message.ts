/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class MailStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6275;

    unread: number;
    total: number;

    constructor() {
        this.unread = 0;
        this.total = 0;
        super();
    }

    public getMessageId(): number {
        return MailStatusMessage.ID;
    }

    public reset(): void {
        this.unread = 0;
        this.total = 0;
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
        this.serializeAs_MailStatusMessage(param1);
    }

    public serializeAs_MailStatusMessage(param1: ICustomDataOutput): void {
        if (this.unread < 0) {
            throw new Error('Forbidden value (' + this.unread + ') on element unread.');
        }
        param1.writeVarShort(this.unread);
        if (this.total < 0) {
            throw new Error('Forbidden value (' + this.total + ') on element total.');
        }
        param1.writeVarShort(this.total);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MailStatusMessage(param1);
    }

    public deserializeAs_MailStatusMessage(param1: ICustomDataInput): void {
        this.unread = param1.readVarUhShort();
        if (this.unread < 0) {
            throw new Error('Forbidden value (' + this.unread + ') on element of MailStatusMessage.unread.');
        }
        this.total = param1.readVarUhShort();
        if (this.total < 0) {
            throw new Error('Forbidden value (' + this.total + ') on element of MailStatusMessage.total.');
        }

    }
}

export = MailStatusMessage;
