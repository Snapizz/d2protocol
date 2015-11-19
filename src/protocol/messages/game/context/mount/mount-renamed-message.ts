/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountRenamedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5983;

    mountId: number;
    name: string;

    constructor() {
        this.mountId = 0;
        this.name = '';
        super();
    }

    public getMessageId(): number {
        return MountRenamedMessage.ID;
    }

    public reset(): void {
        this.mountId = 0;
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
        this.serializeAs_MountRenamedMessage(param1);
    }

    public serializeAs_MountRenamedMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.mountId);
        param1.writeUTF(this.name);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountRenamedMessage(param1);
    }

    public deserializeAs_MountRenamedMessage(param1: ICustomDataInput): void {
        this.mountId = param1.readVarInt();
        this.name = param1.readUTF();

    }
}

export = MountRenamedMessage;
