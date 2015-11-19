/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class SelectedServerRefusedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 41;

    serverId: number;
    error: number;
    serverStatus: number;

    constructor() {
        this.serverId = 0;
        this.error = 1;
        this.serverStatus = 1;
        super();
    }

    public getMessageId(): number {
        return SelectedServerRefusedMessage.ID;
    }

    public reset(): void {
        this.serverId = 0;
        this.error = 1;
        this.serverStatus = 1;
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
        this.serializeAs_SelectedServerRefusedMessage(param1);
    }

    public serializeAs_SelectedServerRefusedMessage(param1: ICustomDataOutput): void {
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
        }
        param1.writeVarShort(this.serverId);
        param1.writeByte(this.error);
        param1.writeByte(this.serverStatus);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SelectedServerRefusedMessage(param1);
    }

    public deserializeAs_SelectedServerRefusedMessage(param1: ICustomDataInput): void {
        this.serverId = param1.readVarUhShort();
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element of SelectedServerRefusedMessage.serverId.');
        }
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error('Forbidden value (' + this.error + ') on element of SelectedServerRefusedMessage.error.');
        }
        this.serverStatus = param1.readByte();
        if (this.serverStatus < 0) {
            throw new Error('Forbidden value (' + this.serverStatus + ') on element of SelectedServerRefusedMessage.serverStatus.');
        }

    }
}

export = SelectedServerRefusedMessage;
