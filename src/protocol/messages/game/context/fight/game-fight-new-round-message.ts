/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightNewRoundMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6239;

    roundNumber: number;

    constructor() {
        this.roundNumber = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightNewRoundMessage.ID;
    }

    public reset(): void {
        this.roundNumber = 0;
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
        this.serializeAs_GameFightNewRoundMessage(param1);
    }

    public serializeAs_GameFightNewRoundMessage(param1: ICustomDataOutput): void {
        if (this.roundNumber < 0) {
            throw new Error('Forbidden value (' + this.roundNumber + ') on element roundNumber.');
        }
        param1.writeVarInt(this.roundNumber);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightNewRoundMessage(param1);
    }

    public deserializeAs_GameFightNewRoundMessage(param1: ICustomDataInput): void {
        this.roundNumber = param1.readVarUhInt();
        if (this.roundNumber < 0) {
            throw new Error('Forbidden value (' + this.roundNumber + ') on element of GameFightNewRoundMessage.roundNumber.');
        }

    }
}

export = GameFightNewRoundMessage;
