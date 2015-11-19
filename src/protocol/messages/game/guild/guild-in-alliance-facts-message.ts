/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildFactsMessage = require('./guild-facts-message');
import BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations');
import GuildFactSheetInformations = require('../../../types/game/social/guild-fact-sheet-informations');
import CharacterMinimalInformations = require('../../../types/game/character/character-minimal-informations');

class GuildInAllianceFactsMessage extends GuildFactsMessage {
    public static ID: number = 6422;

    allianceInfos: BasicNamedAllianceInformations;

    constructor() {
        this.allianceInfos = new BasicNamedAllianceInformations();
        super();
    }

    public getMessageId(): number {
        return GuildInAllianceFactsMessage.ID;
    }

    public reset(): void {
        this.allianceInfos = new BasicNamedAllianceInformations();
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
        this.serializeAs_GuildInAllianceFactsMessage(param1);
    }

    public serializeAs_GuildInAllianceFactsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GuildFactsMessage(param1);
        this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInAllianceFactsMessage(param1);
    }

    public deserializeAs_GuildInAllianceFactsMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceInfos = new BasicNamedAllianceInformations();
        this.allianceInfos.deserialize(param1);

    }
}

export = GuildInAllianceFactsMessage;
