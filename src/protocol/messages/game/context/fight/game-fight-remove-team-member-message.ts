/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightRemoveTeamMemberMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 711;

    fightId: number;
    teamId: number;
    charId: number;

    constructor() {
        this.fightId = 0;
        this.teamId = 2;
        this.charId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightRemoveTeamMemberMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.teamId = 2;
        this.charId = 0;
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
        this.serializeAs_GameFightRemoveTeamMemberMessage(param1);
    }

    public serializeAs_GameFightRemoveTeamMemberMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeShort(this.fightId);
        param1.writeByte(this.teamId);
        param1.writeInt(this.charId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightRemoveTeamMemberMessage(param1);
    }

    public deserializeAs_GameFightRemoveTeamMemberMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameFightRemoveTeamMemberMessage.fightId.');
        }
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightRemoveTeamMemberMessage.teamId.');
        }
        this.charId = param1.readInt();

    }
}

export = GameFightRemoveTeamMemberMessage;
