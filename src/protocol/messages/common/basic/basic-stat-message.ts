/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicStatMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6530;

    statId: number;

    constructor() {
        this.statId = 0;
        super();
    }

    public getMessageId(): number {
        return BasicStatMessage.ID;
    }

    public reset(): void {
        this.statId = 0;
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
        this.serializeAs_BasicStatMessage(param1);
    }

    public serializeAs_BasicStatMessage(param1: ICustomDataOutput): void {
        param1.writeVarShort(this.statId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicStatMessage(param1);
    }

    public deserializeAs_BasicStatMessage(param1: ICustomDataInput): void {
        this.statId = param1.readVarUhShort();
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element of BasicStatMessage.statId.');
        }

    }
}

export = BasicStatMessage;
