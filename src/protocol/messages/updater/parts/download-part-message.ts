/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class DownloadPartMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1503;

    id: string;

    constructor() {
        this.id = '';
        super();
    }

    public getMessageId(): number {
        return DownloadPartMessage.ID;
    }

    public reset(): void {
        this.id = '';
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
        this.serializeAs_DownloadPartMessage(param1);
    }

    public serializeAs_DownloadPartMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.id);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DownloadPartMessage(param1);
    }

    public deserializeAs_DownloadPartMessage(param1: ICustomDataInput): void {
        this.id = param1.readUTF();

    }
}

export = DownloadPartMessage;
