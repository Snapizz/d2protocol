/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeStartedMessage = require('./exchange-started-message');

class ExchangeStartedWithPodsMessage extends ExchangeStartedMessage {
    public static ID: number = 6129;

    firstCharacterId: number;
    firstCharacterCurrentWeight: number;
    firstCharacterMaxWeight: number;
    secondCharacterId: number;
    secondCharacterCurrentWeight: number;
    secondCharacterMaxWeight: number;

    constructor() {
        this.firstCharacterId = 0;
        this.firstCharacterCurrentWeight = 0;
        this.firstCharacterMaxWeight = 0;
        this.secondCharacterId = 0;
        this.secondCharacterCurrentWeight = 0;
        this.secondCharacterMaxWeight = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartedWithPodsMessage.ID;
    }

    public reset(): void {
        this.firstCharacterId = 0;
        this.firstCharacterCurrentWeight = 0;
        this.firstCharacterMaxWeight = 0;
        this.secondCharacterId = 0;
        this.secondCharacterCurrentWeight = 0;
        this.secondCharacterMaxWeight = 0;
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
        this.serializeAs_ExchangeStartedWithPodsMessage(param1);
    }

    public serializeAs_ExchangeStartedWithPodsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeStartedMessage(param1);
        param1.writeInt(this.firstCharacterId);
        if (this.firstCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterCurrentWeight + ') on element firstCharacterCurrentWeight.');
        }
        param1.writeVarInt(this.firstCharacterCurrentWeight);
        if (this.firstCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterMaxWeight + ') on element firstCharacterMaxWeight.');
        }
        param1.writeVarInt(this.firstCharacterMaxWeight);
        param1.writeInt(this.secondCharacterId);
        if (this.secondCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterCurrentWeight + ') on element secondCharacterCurrentWeight.');
        }
        param1.writeVarInt(this.secondCharacterCurrentWeight);
        if (this.secondCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterMaxWeight + ') on element secondCharacterMaxWeight.');
        }
        param1.writeVarInt(this.secondCharacterMaxWeight);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartedWithPodsMessage(param1);
    }

    public deserializeAs_ExchangeStartedWithPodsMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.firstCharacterId = param1.readInt();
        this.firstCharacterCurrentWeight = param1.readVarUhInt();
        if (this.firstCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterCurrentWeight + ') on element of ExchangeStartedWithPodsMessage.firstCharacterCurrentWeight.');
        }
        this.firstCharacterMaxWeight = param1.readVarUhInt();
        if (this.firstCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterMaxWeight + ') on element of ExchangeStartedWithPodsMessage.firstCharacterMaxWeight.');
        }
        this.secondCharacterId = param1.readInt();
        this.secondCharacterCurrentWeight = param1.readVarUhInt();
        if (this.secondCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterCurrentWeight + ') on element of ExchangeStartedWithPodsMessage.secondCharacterCurrentWeight.');
        }
        this.secondCharacterMaxWeight = param1.readVarUhInt();
        if (this.secondCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterMaxWeight + ') on element of ExchangeStartedWithPodsMessage.secondCharacterMaxWeight.');
        }

    }
}

export = ExchangeStartedWithPodsMessage;
