/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class GameRolePlayArenaFightAnswerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6279;

    fightId: number;
    accept: boolean;

    constructor() {
        this.fightId = 0;
        this.accept = false;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayArenaFightAnswerMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
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
        this.serializeAs_GameRolePlayArenaFightAnswerMessage(param1);
    }

    public serializeAs_GameRolePlayArenaFightAnswerMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.fightId);
        param1.writeBoolean(this.accept);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayArenaFightAnswerMessage(param1);
    }

    public deserializeAs_GameRolePlayArenaFightAnswerMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readInt();
        this.accept = param1.readBoolean();

    }
}

export = GameRolePlayArenaFightAnswerMessage;
