/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class DownloadSetSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1512;

    downloadSpeed: number;

    constructor() {
        this.downloadSpeed = 0;
        super();
    }

    public getMessageId(): number {
        return DownloadSetSpeedRequestMessage.ID;
    }

    public reset(): void {
        this.downloadSpeed = 0;
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
        this.serializeAs_DownloadSetSpeedRequestMessage(param1);
    }

    public serializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataOutput): void {
        if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
            throw new Error('Forbidden value (' + this.downloadSpeed + ') on element downloadSpeed.');
        }
        param1.writeByte(this.downloadSpeed);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DownloadSetSpeedRequestMessage(param1);
    }

    public deserializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataInput): void {
        this.downloadSpeed = param1.readByte();
        if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
            throw new Error('Forbidden value (' + this.downloadSpeed + ') on element of DownloadSetSpeedRequestMessage.downloadSpeed.');
        }

    }
}

export = DownloadSetSpeedRequestMessage;
