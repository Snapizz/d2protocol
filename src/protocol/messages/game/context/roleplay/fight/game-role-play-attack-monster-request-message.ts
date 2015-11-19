/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlayAttackMonsterRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6191;

    monsterGroupId: number;

    constructor() {
        this.monsterGroupId = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayAttackMonsterRequestMessage.ID;
    }

    public reset(): void {
        this.monsterGroupId = 0;
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
        this.serializeAs_GameRolePlayAttackMonsterRequestMessage(param1);
    }

    public serializeAs_GameRolePlayAttackMonsterRequestMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.monsterGroupId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayAttackMonsterRequestMessage(param1);
    }

    public deserializeAs_GameRolePlayAttackMonsterRequestMessage(param1: ICustomDataInput): void {
        this.monsterGroupId = param1.readInt();

    }
}

export = GameRolePlayAttackMonsterRequestMessage;
