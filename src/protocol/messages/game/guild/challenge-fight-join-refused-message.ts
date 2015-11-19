/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ChallengeFightJoinRefusedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5908;

    playerId: number;
    reason: number;

    constructor() {
        this.playerId = 0;
        this.reason = 0;
        super();
    }

    public getMessageId(): number {
        return ChallengeFightJoinRefusedMessage.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.reason = 0;
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
        this.serializeAs_ChallengeFightJoinRefusedMessage(param1);
    }

    public serializeAs_ChallengeFightJoinRefusedMessage(param1: ICustomDataOutput): void {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeByte(this.reason);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChallengeFightJoinRefusedMessage(param1);
    }

    public deserializeAs_ChallengeFightJoinRefusedMessage(param1: ICustomDataInput): void {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of ChallengeFightJoinRefusedMessage.playerId.');
        }
        this.reason = param1.readByte();

    }
}

export = ChallengeFightJoinRefusedMessage;
