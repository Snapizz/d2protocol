/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountRidingMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5967;

    isRiding: boolean;

    constructor() {
        this.isRiding = false;
        super();
    }

    public getMessageId(): number {
        return MountRidingMessage.ID;
    }

    public reset(): void {
        this.isRiding = false;
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
        this.serializeAs_MountRidingMessage(param1);
    }

    public serializeAs_MountRidingMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.isRiding);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountRidingMessage(param1);
    }

    public deserializeAs_MountRidingMessage(param1: ICustomDataInput): void {
        this.isRiding = param1.readBoolean();

    }
}

export = MountRidingMessage;
