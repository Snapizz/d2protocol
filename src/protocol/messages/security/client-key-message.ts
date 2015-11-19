/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class ClientKeyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5607;

    key: string;

    constructor() {
        this.key = '';
        super();
    }

    public getMessageId(): number {
        return ClientKeyMessage.ID;
    }

    public reset(): void {
        this.key = '';
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
        this.serializeAs_ClientKeyMessage(param1);
    }

    public serializeAs_ClientKeyMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.key);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ClientKeyMessage(param1);
    }

    public deserializeAs_ClientKeyMessage(param1: ICustomDataInput): void {
        this.key = param1.readUTF();

    }
}

export = ClientKeyMessage;
