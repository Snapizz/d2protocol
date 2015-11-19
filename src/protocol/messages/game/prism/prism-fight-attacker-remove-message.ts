/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismFightAttackerRemoveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5897;

    subAreaId: number;
    fightId: number;
    fighterToRemoveId: number;

    constructor() {
        this.subAreaId = 0;
        this.fightId = 0;
        this.fighterToRemoveId = 0;
        super();
    }

    public getMessageId(): number {
        return PrismFightAttackerRemoveMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.fightId = 0;
        this.fighterToRemoveId = 0;
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
        this.serializeAs_PrismFightAttackerRemoveMessage(param1);
    }

    public serializeAs_PrismFightAttackerRemoveMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeVarShort(this.fightId);
        if (this.fighterToRemoveId < 0) {
            throw new Error('Forbidden value (' + this.fighterToRemoveId + ') on element fighterToRemoveId.');
        }
        param1.writeVarInt(this.fighterToRemoveId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismFightAttackerRemoveMessage(param1);
    }

    public deserializeAs_PrismFightAttackerRemoveMessage(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightAttackerRemoveMessage.subAreaId.');
        }
        this.fightId = param1.readVarUhShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of PrismFightAttackerRemoveMessage.fightId.');
        }
        this.fighterToRemoveId = param1.readVarUhInt();
        if (this.fighterToRemoveId < 0) {
            throw new Error('Forbidden value (' + this.fighterToRemoveId + ') on element of PrismFightAttackerRemoveMessage.fighterToRemoveId.');
        }

    }
}

export = PrismFightAttackerRemoveMessage;
