/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import CharacterMinimalPlusLookInformations = require('../../../types/game/character/character-minimal-plus-look-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class PrismFightDefenderAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5895;

    subAreaId: number;
    fightId: number;
    defender: CharacterMinimalPlusLookInformations;

    constructor() {
        this.subAreaId = 0;
        this.fightId = 0;
        this.defender = new CharacterMinimalPlusLookInformations();
        super();
    }

    public getMessageId(): number {
        return PrismFightDefenderAddMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.fightId = 0;
        this.defender = new CharacterMinimalPlusLookInformations();
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
        this.serializeAs_PrismFightDefenderAddMessage(param1);
    }

    public serializeAs_PrismFightDefenderAddMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeVarShort(this.fightId);
        param1.writeShort(this.defender.getTypeId());
        this.defender.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismFightDefenderAddMessage(param1);
    }

    public deserializeAs_PrismFightDefenderAddMessage(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightDefenderAddMessage.subAreaId.');
        }
        this.fightId = param1.readVarUhShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of PrismFightDefenderAddMessage.fightId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        this.defender = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc2_);
        this.defender.deserialize(param1);

    }
}

export = PrismFightDefenderAddMessage;
