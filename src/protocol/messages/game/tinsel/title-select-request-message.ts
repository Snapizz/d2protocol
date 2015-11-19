/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class TitleSelectRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6365;

    titleId: number;

    constructor() {
        this.titleId = 0;
        super();
    }

    public getMessageId(): number {
        return TitleSelectRequestMessage.ID;
    }

    public reset(): void {
        this.titleId = 0;
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
        this.serializeAs_TitleSelectRequestMessage(param1);
    }

    public serializeAs_TitleSelectRequestMessage(param1: ICustomDataOutput): void {
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TitleSelectRequestMessage(param1);
    }

    public deserializeAs_TitleSelectRequestMessage(param1: ICustomDataInput): void {
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of TitleSelectRequestMessage.titleId.');
        }

    }
}

export = TitleSelectRequestMessage;
