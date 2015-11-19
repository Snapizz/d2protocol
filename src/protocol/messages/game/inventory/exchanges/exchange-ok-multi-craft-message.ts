/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeOkMultiCraftMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5768;

    initiatorId: number;
    otherId: number;
    role: number;

    constructor() {
        this.initiatorId = 0;
        this.otherId = 0;
        this.role = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeOkMultiCraftMessage.ID;
    }

    public reset(): void {
        this.initiatorId = 0;
        this.otherId = 0;
        this.role = 0;
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
        this.serializeAs_ExchangeOkMultiCraftMessage(param1);
    }

    public serializeAs_ExchangeOkMultiCraftMessage(param1: ICustomDataOutput): void {
        if (this.initiatorId < 0) {
            throw new Error('Forbidden value (' + this.initiatorId + ') on element initiatorId.');
        }
        param1.writeVarInt(this.initiatorId);
        if (this.otherId < 0) {
            throw new Error('Forbidden value (' + this.otherId + ') on element otherId.');
        }
        param1.writeVarInt(this.otherId);
        param1.writeByte(this.role);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeOkMultiCraftMessage(param1);
    }

    public deserializeAs_ExchangeOkMultiCraftMessage(param1: ICustomDataInput): void {
        this.initiatorId = param1.readVarUhInt();
        if (this.initiatorId < 0) {
            throw new Error('Forbidden value (' + this.initiatorId + ') on element of ExchangeOkMultiCraftMessage.initiatorId.');
        }
        this.otherId = param1.readVarUhInt();
        if (this.otherId < 0) {
            throw new Error('Forbidden value (' + this.otherId + ') on element of ExchangeOkMultiCraftMessage.otherId.');
        }
        this.role = param1.readByte();

    }
}

export = ExchangeOkMultiCraftMessage;
