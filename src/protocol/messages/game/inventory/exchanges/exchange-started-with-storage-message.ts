/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeStartedMessage = require('./exchange-started-message');

class ExchangeStartedWithStorageMessage extends ExchangeStartedMessage {
    public static ID: number = 6236;

    storageMaxSlot: number;

    constructor() {
        this.storageMaxSlot = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartedWithStorageMessage.ID;
    }

    public reset(): void {
        this.storageMaxSlot = 0;
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
        this.serializeAs_ExchangeStartedWithStorageMessage(param1);
    }

    public serializeAs_ExchangeStartedWithStorageMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeStartedMessage(param1);
        if (this.storageMaxSlot < 0) {
            throw new Error('Forbidden value (' + this.storageMaxSlot + ') on element storageMaxSlot.');
        }
        param1.writeVarInt(this.storageMaxSlot);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartedWithStorageMessage(param1);
    }

    public deserializeAs_ExchangeStartedWithStorageMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.storageMaxSlot = param1.readVarUhInt();
        if (this.storageMaxSlot < 0) {
            throw new Error('Forbidden value (' + this.storageMaxSlot + ') on element of ExchangeStartedWithStorageMessage.storageMaxSlot.');
        }

    }
}

export = ExchangeStartedWithStorageMessage;
