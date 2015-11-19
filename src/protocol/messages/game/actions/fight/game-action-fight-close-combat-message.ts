/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionFightTargetedAbilityMessage = require('./abstract-game-action-fight-targeted-ability-message');

class GameActionFightCloseCombatMessage extends AbstractGameActionFightTargetedAbilityMessage {
    public static ID: number = 6116;

    weaponGenericId: number;

    constructor() {
        this.weaponGenericId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightCloseCombatMessage.ID;
    }

    public reset(): void {
        this.weaponGenericId = 0;
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
        this.serializeAs_GameActionFightCloseCombatMessage(param1);
    }

    public serializeAs_GameActionFightCloseCombatMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
        if (this.weaponGenericId < 0) {
            throw new Error('Forbidden value (' + this.weaponGenericId + ') on element weaponGenericId.');
        }
        param1.writeVarShort(this.weaponGenericId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightCloseCombatMessage(param1);
    }

    public deserializeAs_GameActionFightCloseCombatMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.weaponGenericId = param1.readVarUhShort();
        if (this.weaponGenericId < 0) {
            throw new Error('Forbidden value (' + this.weaponGenericId + ') on element of GameActionFightCloseCombatMessage.weaponGenericId.');
        }

    }
}

export = GameActionFightCloseCombatMessage;
