/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class DungeonKeyRingUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6296;

    dungeonId: number;
    available: boolean;

    constructor() {
        this.dungeonId = 0;
        this.available = false;
        super();
    }

    public getMessageId(): number {
        return DungeonKeyRingUpdateMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.available = false;
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
        this.serializeAs_DungeonKeyRingUpdateMessage(param1);
    }

    public serializeAs_DungeonKeyRingUpdateMessage(param1: ICustomDataOutput): void {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeBoolean(this.available);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DungeonKeyRingUpdateMessage(param1);
    }

    public deserializeAs_DungeonKeyRingUpdateMessage(param1: ICustomDataInput): void {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonKeyRingUpdateMessage.dungeonId.');
        }
        this.available = param1.readBoolean();

    }
}

export = DungeonKeyRingUpdateMessage;
