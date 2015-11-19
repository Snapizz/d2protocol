/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayShowActorMessage = require('./game-role-play-show-actor-message');
import GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');

class GameRolePlayShowActorWithEventMessage extends GameRolePlayShowActorMessage {
    public static ID: number = 6407;

    actorEventId: number;

    constructor() {
        this.actorEventId = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayShowActorWithEventMessage.ID;
    }

    public reset(): void {
        this.actorEventId = 0;
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
        this.serializeAs_GameRolePlayShowActorWithEventMessage(param1);
    }

    public serializeAs_GameRolePlayShowActorWithEventMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayShowActorMessage(param1);
        if (this.actorEventId < 0) {
            throw new Error('Forbidden value (' + this.actorEventId + ') on element actorEventId.');
        }
        param1.writeByte(this.actorEventId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayShowActorWithEventMessage(param1);
    }

    public deserializeAs_GameRolePlayShowActorWithEventMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.actorEventId = param1.readByte();
        if (this.actorEventId < 0) {
            throw new Error('Forbidden value (' + this.actorEventId + ') on element of GameRolePlayShowActorWithEventMessage.actorEventId.');
        }

    }
}

export = GameRolePlayShowActorWithEventMessage;
