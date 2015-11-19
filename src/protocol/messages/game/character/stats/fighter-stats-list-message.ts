/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations');

class FighterStatsListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6322;

    stats: CharacterCharacteristicsInformations;

    constructor() {
        this.stats = new CharacterCharacteristicsInformations();
        super();
    }

    public getMessageId(): number {
        return FighterStatsListMessage.ID;
    }

    public reset(): void {
        this.stats = new CharacterCharacteristicsInformations();
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
        this.serializeAs_FighterStatsListMessage(param1);
    }

    public serializeAs_FighterStatsListMessage(param1: ICustomDataOutput): void {
        this.stats.serializeAs_CharacterCharacteristicsInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FighterStatsListMessage(param1);
    }

    public deserializeAs_FighterStatsListMessage(param1: ICustomDataInput): void {
        this.stats = new CharacterCharacteristicsInformations();
        this.stats.deserialize(param1);

    }
}

export = FighterStatsListMessage;
