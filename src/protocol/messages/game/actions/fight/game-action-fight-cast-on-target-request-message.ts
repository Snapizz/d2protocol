/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameActionFightCastOnTargetRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6330;

    spellId: number;
    targetId: number;

    constructor() {
        this.spellId = 0;
        this.targetId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightCastOnTargetRequestMessage.ID;
    }

    public reset(): void {
        this.spellId = 0;
        this.targetId = 0;
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
        this.serializeAs_GameActionFightCastOnTargetRequestMessage(param1);
    }

    public serializeAs_GameActionFightCastOnTargetRequestMessage(param1: ICustomDataOutput): void {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        param1.writeInt(this.targetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightCastOnTargetRequestMessage(param1);
    }

    public deserializeAs_GameActionFightCastOnTargetRequestMessage(param1: ICustomDataInput): void {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightCastOnTargetRequestMessage.spellId.');
        }
        this.targetId = param1.readInt();

    }
}

export = GameActionFightCastOnTargetRequestMessage;
