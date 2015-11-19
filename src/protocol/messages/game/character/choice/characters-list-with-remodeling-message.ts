/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharactersListMessage = require('./characters-list-message');
import CharacterToRemodelInformations = require('../../../../types/game/character/choice/character-to-remodel-informations');
import CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations');

class CharactersListWithRemodelingMessage extends CharactersListMessage {
    public static ID: number = 6550;

    charactersToRemodel: CharacterToRemodelInformations[];

    constructor() {
        this.charactersToRemodel = [];
        super();
    }

    public getMessageId(): number {
        return CharactersListWithRemodelingMessage.ID;
    }

    public reset(): void {
        this.charactersToRemodel = [];
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
        this.serializeAs_CharactersListWithRemodelingMessage(param1);
    }

    public serializeAs_CharactersListWithRemodelingMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CharactersListMessage(param1);
        param1.writeShort(this.charactersToRemodel.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.charactersToRemodel.length) {
            (this.charactersToRemodel[_loc2_]).serializeAs_CharacterToRemodelInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharactersListWithRemodelingMessage(param1);
    }

    public deserializeAs_CharactersListWithRemodelingMessage(param1: ICustomDataInput): void {
        var _loc4_: CharacterToRemodelInformations = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new CharacterToRemodelInformations();
            _loc4_.deserialize(param1);
            this.charactersToRemodel.push(_loc4_);
            _loc3_++;
        }

    }
}

export = CharactersListWithRemodelingMessage;
