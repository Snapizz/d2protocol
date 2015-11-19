/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class DocumentReadingBeginMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5675;

    documentId: number;

    constructor() {
        this.documentId = 0;
        super();
    }

    public getMessageId(): number {
        return DocumentReadingBeginMessage.ID;
    }

    public reset(): void {
        this.documentId = 0;
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
        this.serializeAs_DocumentReadingBeginMessage(param1);
    }

    public serializeAs_DocumentReadingBeginMessage(param1: ICustomDataOutput): void {
        if (this.documentId < 0) {
            throw new Error('Forbidden value (' + this.documentId + ') on element documentId.');
        }
        param1.writeVarShort(this.documentId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DocumentReadingBeginMessage(param1);
    }

    public deserializeAs_DocumentReadingBeginMessage(param1: ICustomDataInput): void {
        this.documentId = param1.readVarUhShort();
        if (this.documentId < 0) {
            throw new Error('Forbidden value (' + this.documentId + ') on element of DocumentReadingBeginMessage.documentId.');
        }

    }
}

export = DocumentReadingBeginMessage;
