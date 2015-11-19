/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class DownloadErrorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1513;

    errorId: number;
    message: string;
    helpUrl: string;

    constructor() {
        this.errorId = 0;
        this.message = '';
        this.helpUrl = '';
        super();
    }

    public getMessageId(): number {
        return DownloadErrorMessage.ID;
    }

    public reset(): void {
        this.errorId = 0;
        this.message = '';
        this.helpUrl = '';
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
        this.serializeAs_DownloadErrorMessage(param1);
    }

    public serializeAs_DownloadErrorMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.errorId);
        param1.writeUTF(this.message);
        param1.writeUTF(this.helpUrl);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DownloadErrorMessage(param1);
    }

    public deserializeAs_DownloadErrorMessage(param1: ICustomDataInput): void {
        this.errorId = param1.readByte();
        if (this.errorId < 0) {
            throw new Error('Forbidden value (' + this.errorId + ') on element of DownloadErrorMessage.errorId.');
        }
        this.message = param1.readUTF();
        this.helpUrl = param1.readUTF();

    }
}

export = DownloadErrorMessage;
