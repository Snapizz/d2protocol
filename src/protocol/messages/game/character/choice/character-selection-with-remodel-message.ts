/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterSelectionMessage = require('./character-selection-message');
import RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information');

class CharacterSelectionWithRemodelMessage extends CharacterSelectionMessage {
    public static ID: number = 6549;

    remodel: RemodelingInformation;

    constructor() {
        this.remodel = new RemodelingInformation();
        super();
    }

    public getMessageId(): number {
        return CharacterSelectionWithRemodelMessage.ID;
    }

    public reset(): void {
        this.remodel = new RemodelingInformation();
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
        this.serializeAs_CharacterSelectionWithRemodelMessage(param1);
    }

    public serializeAs_CharacterSelectionWithRemodelMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterSelectionMessage(param1);
        this.remodel.serializeAs_RemodelingInformation(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterSelectionWithRemodelMessage(param1);
    }

    public deserializeAs_CharacterSelectionWithRemodelMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.remodel = new RemodelingInformation();
        this.remodel.deserialize(param1);

    }
}

export = CharacterSelectionWithRemodelMessage;
