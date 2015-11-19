/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class FriendDeleteResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5601;

    success: boolean;
    name: string;

    constructor() {
        this.success = false;
        this.name = '';
        super();
    }

    public getMessageId(): number {
        return FriendDeleteResultMessage.ID;
    }

    public reset(): void {
        this.success = false;
        this.name = '';
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
        this.serializeAs_FriendDeleteResultMessage(param1);
    }

    public serializeAs_FriendDeleteResultMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.success);
        param1.writeUTF(this.name);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendDeleteResultMessage(param1);
    }

    public deserializeAs_FriendDeleteResultMessage(param1: ICustomDataInput): void {
        this.success = param1.readBoolean();
        this.name = param1.readUTF();

    }
}

export = FriendDeleteResultMessage;
