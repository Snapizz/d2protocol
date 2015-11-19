/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AuthenticationTicketMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 110;

    lang: string;
    ticket: string;

    constructor() {
        this.lang = '';
        this.ticket = '';
        super();
    }

    public getMessageId(): number {
        return AuthenticationTicketMessage.ID;
    }

    public reset(): void {
        this.lang = '';
        this.ticket = '';
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
        this.serializeAs_AuthenticationTicketMessage(param1);
    }

    public serializeAs_AuthenticationTicketMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.lang);
        param1.writeUTF(this.ticket);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AuthenticationTicketMessage(param1);
    }

    public deserializeAs_AuthenticationTicketMessage(param1: ICustomDataInput): void {
        this.lang = param1.readUTF();
        this.ticket = param1.readUTF();

    }
}

export = AuthenticationTicketMessage;
