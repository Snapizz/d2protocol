/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class TeleportToBuddyAnswerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6293;

    dungeonId: number;
    buddyId: number;
    accept: boolean;

    constructor() {
        this.dungeonId = 0;
        this.buddyId = 0;
        this.accept = false;
        super();
    }

    public getMessageId(): number {
        return TeleportToBuddyAnswerMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.buddyId = 0;
        this.accept = false;
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
        this.serializeAs_TeleportToBuddyAnswerMessage(param1);
    }

    public serializeAs_TeleportToBuddyAnswerMessage(param1: ICustomDataOutput): void {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element buddyId.');
        }
        param1.writeVarInt(this.buddyId);
        param1.writeBoolean(this.accept);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TeleportToBuddyAnswerMessage(param1);
    }

    public deserializeAs_TeleportToBuddyAnswerMessage(param1: ICustomDataInput): void {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportToBuddyAnswerMessage.dungeonId.');
        }
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element of TeleportToBuddyAnswerMessage.buddyId.');
        }
        this.accept = param1.readBoolean();

    }
}

export = TeleportToBuddyAnswerMessage;
