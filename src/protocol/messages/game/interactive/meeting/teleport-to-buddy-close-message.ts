/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class TeleportToBuddyCloseMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6303;

    dungeonId: number;
    buddyId: number;

    constructor() {
        this.dungeonId = 0;
        this.buddyId = 0;
        super();
    }

    public getMessageId(): number {
        return TeleportToBuddyCloseMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.buddyId = 0;
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
        this.serializeAs_TeleportToBuddyCloseMessage(param1);
    }

    public serializeAs_TeleportToBuddyCloseMessage(param1: ICustomDataOutput): void {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element buddyId.');
        }
        param1.writeVarInt(this.buddyId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TeleportToBuddyCloseMessage(param1);
    }

    public deserializeAs_TeleportToBuddyCloseMessage(param1: ICustomDataInput): void {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportToBuddyCloseMessage.dungeonId.');
        }
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element of TeleportToBuddyCloseMessage.buddyId.');
        }

    }
}

export = TeleportToBuddyCloseMessage;
