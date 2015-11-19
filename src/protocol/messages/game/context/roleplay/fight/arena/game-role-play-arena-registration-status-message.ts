/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class GameRolePlayArenaRegistrationStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6284;

    registered: boolean;
    step: number;
    battleMode: number;

    constructor() {
        this.registered = false;
        this.step = 0;
        this.battleMode = 3;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayArenaRegistrationStatusMessage.ID;
    }

    public reset(): void {
        this.registered = false;
        this.step = 0;
        this.battleMode = 3;
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
        this.serializeAs_GameRolePlayArenaRegistrationStatusMessage(param1);
    }

    public serializeAs_GameRolePlayArenaRegistrationStatusMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.registered);
        param1.writeByte(this.step);
        param1.writeInt(this.battleMode);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayArenaRegistrationStatusMessage(param1);
    }

    public deserializeAs_GameRolePlayArenaRegistrationStatusMessage(param1: ICustomDataInput): void {
        this.registered = param1.readBoolean();
        this.step = param1.readByte();
        if (this.step < 0) {
            throw new Error('Forbidden value (' + this.step + ') on element of GameRolePlayArenaRegistrationStatusMessage.step.');
        }
        this.battleMode = param1.readInt();
        if (this.battleMode < 0) {
            throw new Error('Forbidden value (' + this.battleMode + ') on element of GameRolePlayArenaRegistrationStatusMessage.battleMode.');
        }

    }
}

export = GameRolePlayArenaRegistrationStatusMessage;
