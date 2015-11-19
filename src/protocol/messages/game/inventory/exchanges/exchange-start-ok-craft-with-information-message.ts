/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeStartOkCraftMessage = require('./exchange-start-ok-craft-message');

class ExchangeStartOkCraftWithInformationMessage extends ExchangeStartOkCraftMessage {
    public static ID: number = 5941;

    skillId: number;

    constructor() {
        this.skillId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkCraftWithInformationMessage.ID;
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
        this.serializeAs_ExchangeStartOkCraftWithInformationMessage(param1);
    }

    public serializeAs_ExchangeStartOkCraftWithInformationMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeStartOkCraftMessage(param1);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkCraftWithInformationMessage(param1);
    }

    public deserializeAs_ExchangeStartOkCraftWithInformationMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangeStartOkCraftWithInformationMessage.skillId.');
        }

    }
}

export = ExchangeStartOkCraftWithInformationMessage;
