/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MountClientData = require('../../../../types/game/mount/mount-client-data');

class MountSetMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5968;

    mountData: MountClientData;

    constructor() {
        this.mountData = new MountClientData();
        super();
    }

    public getMessageId(): number {
        return MountSetMessage.ID;
    }

    public reset(): void {
        this.mountData = new MountClientData();
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
        this.serializeAs_MountSetMessage(param1);
    }

    public serializeAs_MountSetMessage(param1: ICustomDataOutput): void {
        this.mountData.serializeAs_MountClientData(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountSetMessage(param1);
    }

    public deserializeAs_MountSetMessage(param1: ICustomDataInput): void {
        this.mountData = new MountClientData();
        this.mountData.deserialize(param1);

    }
}

export = MountSetMessage;
