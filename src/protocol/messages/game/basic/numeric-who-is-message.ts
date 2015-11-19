/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class NumericWhoIsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6297;

    playerId: number;
    accountId: number;

    constructor() {
        this.playerId = 0;
        this.accountId = 0;
        super();
    }

    public getMessageId(): number {
        return NumericWhoIsMessage.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.accountId = 0;
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
        this.serializeAs_NumericWhoIsMessage(param1);
    }

    public serializeAs_NumericWhoIsMessage(param1: ICustomDataOutput): void {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NumericWhoIsMessage(param1);
    }

    public deserializeAs_NumericWhoIsMessage(param1: ICustomDataInput): void {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of NumericWhoIsMessage.playerId.');
        }
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of NumericWhoIsMessage.accountId.');
        }

    }
}

export = NumericWhoIsMessage;
