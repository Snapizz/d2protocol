/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountSterilizedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5977;

    mountId: number;

    constructor() {
        this.mountId = 0;
        super();
    }

    public getMessageId(): number {
        return MountSterilizedMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_MountSterilizedMessage(param1);
    }

    public serializeAs_MountSterilizedMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.mountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountSterilizedMessage(param1);
    }

    public deserializeAs_MountSterilizedMessage(param1: ICustomDataInput): void {
        this.mountId = param1.readVarInt();

    }
}

export = MountSterilizedMessage;
