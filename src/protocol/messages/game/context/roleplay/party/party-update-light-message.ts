/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyEventMessage = require('./abstract-party-event-message');

class PartyUpdateLightMessage extends AbstractPartyEventMessage {
    public static ID: number = 6054;

    id: number;
    lifePoints: number;
    maxLifePoints: number;
    prospecting: number;
    regenRate: number;

    constructor() {
        this.id = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
        super();
    }

    public getMessageId(): number {
        return PartyUpdateLightMessage.ID;
    }

    public reset(): void {
        this.id = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
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
        this.serializeAs_PartyUpdateLightMessage(param1);
    }

    public serializeAs_PartyUpdateLightMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyEventMessage(param1);
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyUpdateLightMessage(param1);
    }

    public deserializeAs_PartyUpdateLightMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of PartyUpdateLightMessage.id.');
        }
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyUpdateLightMessage.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyUpdateLightMessage.maxLifePoints.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyUpdateLightMessage.prospecting.');
        }
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyUpdateLightMessage.regenRate.');
        }

    }
}

export = PartyUpdateLightMessage;
