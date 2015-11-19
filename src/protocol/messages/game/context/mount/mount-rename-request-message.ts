/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountRenameRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5987;

    name: string;
    mountId: number;

    constructor() {
        this.name = '';
        this.mountId = 0;
        super();
    }

    public getMessageId(): number {
        return MountRenameRequestMessage.ID;
    }

    public reset(): void {
        this.name = '';
        this.mountId = 0;
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
        this.serializeAs_MountRenameRequestMessage(param1);
    }

    public serializeAs_MountRenameRequestMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.name);
        param1.writeVarInt(this.mountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountRenameRequestMessage(param1);
    }

    public deserializeAs_MountRenameRequestMessage(param1: ICustomDataInput): void {
        this.name = param1.readUTF();
        this.mountId = param1.readVarInt();

    }
}

export = MountRenameRequestMessage;
