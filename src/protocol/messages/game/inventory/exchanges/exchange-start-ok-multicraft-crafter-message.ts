/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeStartOkMulticraftCrafterMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5818;

    skillId: number;

    constructor() {
        this.skillId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkMulticraftCrafterMessage.ID;
    }

    public reset(): void {
        this.skillId = 0;
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
        this.serializeAs_ExchangeStartOkMulticraftCrafterMessage(param1);
    }

    public serializeAs_ExchangeStartOkMulticraftCrafterMessage(param1: ICustomDataOutput): void {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkMulticraftCrafterMessage(param1);
    }

    public deserializeAs_ExchangeStartOkMulticraftCrafterMessage(param1: ICustomDataInput): void {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangeStartOkMulticraftCrafterMessage.skillId.');
        }

    }
}

export = ExchangeStartOkMulticraftCrafterMessage;
