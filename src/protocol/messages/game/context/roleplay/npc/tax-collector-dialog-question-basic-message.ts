/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations');

class TaxCollectorDialogQuestionBasicMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5619;

    guildInfo: BasicGuildInformations;

    constructor() {
        this.guildInfo = new BasicGuildInformations();
        super();
    }

    public getMessageId(): number {
        return TaxCollectorDialogQuestionBasicMessage.ID;
    }

    public reset(): void {
        this.guildInfo = new BasicGuildInformations();
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
        this.serializeAs_TaxCollectorDialogQuestionBasicMessage(param1);
    }

    public serializeAs_TaxCollectorDialogQuestionBasicMessage(param1: ICustomDataOutput): void {
        this.guildInfo.serializeAs_BasicGuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorDialogQuestionBasicMessage(param1);
    }

    public deserializeAs_TaxCollectorDialogQuestionBasicMessage(param1: ICustomDataInput): void {
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);

    }
}

export = TaxCollectorDialogQuestionBasicMessage;
