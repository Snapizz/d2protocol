/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class TeleportRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5961;

    teleporterType: number;
    mapId: number;

    constructor() {
        this.teleporterType = 0;
        this.mapId = 0;
        super();
    }

    public getMessageId(): number {
        return TeleportRequestMessage.ID;
    }

    public reset(): void {
        this.teleporterType = 0;
        this.mapId = 0;
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
        this.serializeAs_TeleportRequestMessage(param1);
    }

    public serializeAs_TeleportRequestMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.teleporterType);
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
        }
        param1.writeInt(this.mapId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TeleportRequestMessage(param1);
    }

    public deserializeAs_TeleportRequestMessage(param1: ICustomDataInput): void {
        this.teleporterType = param1.readByte();
        if (this.teleporterType < 0) {
            throw new Error('Forbidden value (' + this.teleporterType + ') on element of TeleportRequestMessage.teleporterType.');
        }
        this.mapId = param1.readInt();
        if (this.mapId < 0) {
            throw new Error('Forbidden value (' + this.mapId + ') on element of TeleportRequestMessage.mapId.');
        }

    }
}

export = TeleportRequestMessage;
