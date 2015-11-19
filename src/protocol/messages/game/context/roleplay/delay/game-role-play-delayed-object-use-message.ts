/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import GameRolePlayDelayedActionMessage = require('./game-role-play-delayed-action-message');

class GameRolePlayDelayedObjectUseMessage extends GameRolePlayDelayedActionMessage {
    public static ID: number = 6425;

    objectGID: number;

    constructor() {
        this.objectGID = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayDelayedObjectUseMessage.ID;
    }

    public reset(): void {
        this.objectGID = 0;
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
        this.serializeAs_GameRolePlayDelayedObjectUseMessage(param1);
    }

    public serializeAs_GameRolePlayDelayedObjectUseMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayDelayedActionMessage(param1);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayDelayedObjectUseMessage(param1);
    }

    public deserializeAs_GameRolePlayDelayedObjectUseMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of GameRolePlayDelayedObjectUseMessage.objectGID.');
        }

    }
}

export = GameRolePlayDelayedObjectUseMessage;
