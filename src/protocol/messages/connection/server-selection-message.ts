/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class ServerSelectionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 40;

    serverId: number;

    constructor() {
        this.serverId = 0;
        super();
    }

    public getMessageId(): number {
        return ServerSelectionMessage.ID;
    }

    public reset(): void {
        this.serverId = 0;
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
        this.serializeAs_ServerSelectionMessage(param1);
    }

    public serializeAs_ServerSelectionMessage(param1: ICustomDataOutput): void {
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
        }
        param1.writeVarShort(this.serverId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSelectionMessage(param1);
    }

    public deserializeAs_ServerSelectionMessage(param1: ICustomDataInput): void {
        this.serverId = param1.readVarUhShort();
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element of ServerSelectionMessage.serverId.');
        }

    }
}

export = ServerSelectionMessage;
