/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class GameRolePlayArenaRegisterMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6280;

    battleMode: number;

    constructor() {
        this.battleMode = 3;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayArenaRegisterMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_GameRolePlayArenaRegisterMessage(param1);
    }

    public serializeAs_GameRolePlayArenaRegisterMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.battleMode);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayArenaRegisterMessage(param1);
    }

    public deserializeAs_GameRolePlayArenaRegisterMessage(param1: ICustomDataInput): void {
        this.battleMode = param1.readInt();
        if (this.battleMode < 0) {
            throw new Error('Forbidden value (' + this.battleMode + ') on element of GameRolePlayArenaRegisterMessage.battleMode.');
        }

    }
}

export = GameRolePlayArenaRegisterMessage;
