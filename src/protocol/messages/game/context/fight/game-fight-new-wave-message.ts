/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightNewWaveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6490;

    id: number;
    teamId: number;
    nbTurnBeforeNextWave: number;

    constructor() {
        this.id = 0;
        this.teamId = 2;
        this.nbTurnBeforeNextWave = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightNewWaveMessage.ID;
    }

    public reset(): void {
        this.id = 0;
        this.teamId = 2;
        this.nbTurnBeforeNextWave = 0;
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
        this.serializeAs_GameFightNewWaveMessage(param1);
    }

    public serializeAs_GameFightNewWaveMessage(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeByte(this.id);
        param1.writeByte(this.teamId);
        param1.writeShort(this.nbTurnBeforeNextWave);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightNewWaveMessage(param1);
    }

    public deserializeAs_GameFightNewWaveMessage(param1: ICustomDataInput): void {
        this.id = param1.readByte();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of GameFightNewWaveMessage.id.');
        }
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightNewWaveMessage.teamId.');
        }
        this.nbTurnBeforeNextWave = param1.readShort();

    }
}

export = GameFightNewWaveMessage;
