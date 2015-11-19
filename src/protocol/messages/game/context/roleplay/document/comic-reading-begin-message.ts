/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ComicReadingBeginMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6536;

    comicId: number;

    constructor() {
        this.comicId = 0;
        super();
    }

    public getMessageId(): number {
        return ComicReadingBeginMessage.ID;
    }

    public reset(): void {
        this.comicId = 0;
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
        this.serializeAs_ComicReadingBeginMessage(param1);
    }

    public serializeAs_ComicReadingBeginMessage(param1: ICustomDataOutput): void {
        if (this.comicId < 0) {
            throw new Error('Forbidden value (' + this.comicId + ') on element comicId.');
        }
        param1.writeVarShort(this.comicId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ComicReadingBeginMessage(param1);
    }

    public deserializeAs_ComicReadingBeginMessage(param1: ICustomDataInput): void {
        this.comicId = param1.readVarUhShort();
        if (this.comicId < 0) {
            throw new Error('Forbidden value (' + this.comicId + ') on element of ComicReadingBeginMessage.comicId.');
        }

    }
}

export = ComicReadingBeginMessage;
