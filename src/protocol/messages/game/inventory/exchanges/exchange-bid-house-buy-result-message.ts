/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHouseBuyResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6272;

    uid: number;
    bought: boolean;

    constructor() {
        this.uid = 0;
        this.bought = false;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseBuyResultMessage.ID;
    }

    public reset(): void {
        this.uid = 0;
        this.bought = false;
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
        this.serializeAs_ExchangeBidHouseBuyResultMessage(param1);
    }

    public serializeAs_ExchangeBidHouseBuyResultMessage(param1: ICustomDataOutput): void {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
        param1.writeBoolean(this.bought);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseBuyResultMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseBuyResultMessage(param1: ICustomDataInput): void {
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of ExchangeBidHouseBuyResultMessage.uid.');
        }
        this.bought = param1.readBoolean();

    }
}

export = ExchangeBidHouseBuyResultMessage;
