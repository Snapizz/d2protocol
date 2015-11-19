/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import BasicCharactersListMessage = require('./basic-characters-list-message');
import CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations');

class CharactersListMessage extends BasicCharactersListMessage {
    public static ID: number = 151;

    hasStartupActions: boolean;

    constructor() {
        this.hasStartupActions = false;
        super();
    }

    public getMessageId(): number {
        return CharactersListMessage.ID;
    }

    public reset(): void {
        this.hasStartupActions = false;
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
        this.serializeAs_CharactersListMessage(param1);
    }

    public serializeAs_CharactersListMessage(param1: ICustomDataOutput): void {
        super.serializeAs_BasicCharactersListMessage(param1);
        param1.writeBoolean(this.hasStartupActions);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharactersListMessage(param1);
    }

    public deserializeAs_CharactersListMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.hasStartupActions = param1.readBoolean();

    }
}

export = CharactersListMessage;
