/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightOptionStateUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5927;

    fightId: number;
    teamId: number;
    option: number;
    state: boolean;

    constructor() {
        this.fightId = 0;
        this.teamId = 2;
        this.option = 3;
        this.state = false;
        super();
    }

    public getMessageId(): number {
        return GameFightOptionStateUpdateMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.teamId = 2;
        this.option = 3;
        this.state = false;
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
        this.serializeAs_GameFightOptionStateUpdateMessage(param1);
    }

    public serializeAs_GameFightOptionStateUpdateMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeShort(this.fightId);
        param1.writeByte(this.teamId);
        param1.writeByte(this.option);
        param1.writeBoolean(this.state);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightOptionStateUpdateMessage(param1);
    }

    public deserializeAs_GameFightOptionStateUpdateMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameFightOptionStateUpdateMessage.fightId.');
        }
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightOptionStateUpdateMessage.teamId.');
        }
        this.option = param1.readByte();
        if (this.option < 0) {
            throw new Error('Forbidden value (' + this.option + ') on element of GameFightOptionStateUpdateMessage.option.');
        }
        this.state = param1.readBoolean();

    }
}

export = GameFightOptionStateUpdateMessage;
