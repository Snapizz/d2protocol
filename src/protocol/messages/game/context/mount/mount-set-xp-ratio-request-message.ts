/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountSetXpRatioRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5989;

    xpRatio: number;

    constructor() {
        this.xpRatio = 0;
        super();
    }

    public getMessageId(): number {
        return MountSetXpRatioRequestMessage.ID;
    }

    public reset(): void {
        this.xpRatio = 0;
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
        this.serializeAs_MountSetXpRatioRequestMessage(param1);
    }

    public serializeAs_MountSetXpRatioRequestMessage(param1: ICustomDataOutput): void {
        if (this.xpRatio < 0) {
            throw new Error('Forbidden value (' + this.xpRatio + ') on element xpRatio.');
        }
        param1.writeByte(this.xpRatio);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountSetXpRatioRequestMessage(param1);
    }

    public deserializeAs_MountSetXpRatioRequestMessage(param1: ICustomDataInput): void {
        this.xpRatio = param1.readByte();
        if (this.xpRatio < 0) {
            throw new Error('Forbidden value (' + this.xpRatio + ') on element of MountSetXpRatioRequestMessage.xpRatio.');
        }

    }
}

export = MountSetXpRatioRequestMessage;
