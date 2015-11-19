/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ContactLookRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5932;

    requestId: number;
    contactType: number;

    constructor() {
        this.requestId = 0;
        this.contactType = 0;
        super();
    }

    public getMessageId(): number {
        return ContactLookRequestMessage.ID;
    }

    public reset(): void {
        this.requestId = 0;
        this.contactType = 0;
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
        this.serializeAs_ContactLookRequestMessage(param1);
    }

    public serializeAs_ContactLookRequestMessage(param1: ICustomDataOutput): void {
        if (this.requestId < 0 || this.requestId > 255) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeByte(this.requestId);
        param1.writeByte(this.contactType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ContactLookRequestMessage(param1);
    }

    public deserializeAs_ContactLookRequestMessage(param1: ICustomDataInput): void {
        this.requestId = param1.readUnsignedByte();
        if (this.requestId < 0 || this.requestId > 255) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of ContactLookRequestMessage.requestId.');
        }
        this.contactType = param1.readByte();
        if (this.contactType < 0) {
            throw new Error('Forbidden value (' + this.contactType + ') on element of ContactLookRequestMessage.contactType.');
        }

    }
}

export = ContactLookRequestMessage;
