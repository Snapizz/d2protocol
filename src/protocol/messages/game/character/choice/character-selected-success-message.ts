/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations');

class CharacterSelectedSuccessMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 153;

    infos: CharacterBaseInformations;
    isCollectingStats: boolean;

    constructor() {
        this.infos = new CharacterBaseInformations();
        this.isCollectingStats = false;
        super();
    }

    public getMessageId(): number {
        return CharacterSelectedSuccessMessage.ID;
    }

    public reset(): void {
        this.infos = new CharacterBaseInformations();
        this.isCollectingStats = false;
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
        this.serializeAs_CharacterSelectedSuccessMessage(param1);
    }

    public serializeAs_CharacterSelectedSuccessMessage(param1: ICustomDataOutput): void {
        this.infos.serializeAs_CharacterBaseInformations(param1);
        param1.writeBoolean(this.isCollectingStats);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterSelectedSuccessMessage(param1);
    }

    public deserializeAs_CharacterSelectedSuccessMessage(param1: ICustomDataInput): void {
        this.infos = new CharacterBaseInformations();
        this.infos.deserialize(param1);
        this.isCollectingStats = param1.readBoolean();

    }
}

export = CharacterSelectedSuccessMessage;
