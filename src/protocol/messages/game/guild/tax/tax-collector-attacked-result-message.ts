/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations');
import BasicGuildInformations = require('../../../../types/game/context/roleplay/basic-guild-informations');

class TaxCollectorAttackedResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5635;

    deadOrAlive: boolean;
    basicInfos: TaxCollectorBasicInformations;
    guild: BasicGuildInformations;

    constructor() {
        this.deadOrAlive = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.guild = new BasicGuildInformations();
        super();
    }

    public getMessageId(): number {
        return TaxCollectorAttackedResultMessage.ID;
    }

    public reset(): void {
        this.deadOrAlive = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.guild = new BasicGuildInformations();
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
        this.serializeAs_TaxCollectorAttackedResultMessage(param1);
    }

    public serializeAs_TaxCollectorAttackedResultMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.deadOrAlive);
        this.basicInfos.serializeAs_TaxCollectorBasicInformations(param1);
        this.guild.serializeAs_BasicGuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorAttackedResultMessage(param1);
    }

    public deserializeAs_TaxCollectorAttackedResultMessage(param1: ICustomDataInput): void {
        this.deadOrAlive = param1.readBoolean();
        this.basicInfos = new TaxCollectorBasicInformations();
        this.basicInfos.deserialize(param1);
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);

    }
}

export = TaxCollectorAttackedResultMessage;
