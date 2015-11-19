/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class URLOpenMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6266;

    urlId: number;

    constructor() {
        this.urlId = 0;
        super();
    }

    public getMessageId(): number {
        return URLOpenMessage.ID;
    }

    public reset(): void {
        this.urlId = 0;
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
        this.serializeAs_URLOpenMessage(param1);
    }

    public serializeAs_URLOpenMessage(param1: ICustomDataOutput): void {
        if (this.urlId < 0) {
            throw new Error('Forbidden value (' + this.urlId + ') on element urlId.');
        }
        param1.writeByte(this.urlId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_URLOpenMessage(param1);
    }

    public deserializeAs_URLOpenMessage(param1: ICustomDataInput): void {
        this.urlId = param1.readByte();
        if (this.urlId < 0) {
            throw new Error('Forbidden value (' + this.urlId + ') on element of URLOpenMessage.urlId.');
        }

    }
}

export = URLOpenMessage;
