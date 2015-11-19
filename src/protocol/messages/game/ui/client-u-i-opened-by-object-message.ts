/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ClientUIOpenedMessage = require('./client-u-i-opened-message');

class ClientUIOpenedByObjectMessage extends ClientUIOpenedMessage {
    public static ID: number = 6463;

    uid: number;

    constructor() {
        this.uid = 0;
        super();
    }

    public getMessageId(): number {
        return ClientUIOpenedByObjectMessage.ID;
    }

    public reset(): void {
        this.uid = 0;
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
        this.serializeAs_ClientUIOpenedByObjectMessage(param1);
    }

    public serializeAs_ClientUIOpenedByObjectMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ClientUIOpenedMessage(param1);
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ClientUIOpenedByObjectMessage(param1);
    }

    public deserializeAs_ClientUIOpenedByObjectMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of ClientUIOpenedByObjectMessage.uid.');
        }

    }
}

export = ClientUIOpenedByObjectMessage;
