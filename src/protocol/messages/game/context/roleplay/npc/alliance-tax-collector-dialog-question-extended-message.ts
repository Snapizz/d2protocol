/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TaxCollectorDialogQuestionExtendedMessage = require('./tax-collector-dialog-question-extended-message');
import BasicNamedAllianceInformations = require('../../../../../types/game/context/roleplay/basic-named-alliance-informations');
import BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations');

class AllianceTaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionExtendedMessage {
    public static ID: number = 6445;

    alliance: BasicNamedAllianceInformations;

    constructor() {
        this.alliance = new BasicNamedAllianceInformations();
        super();
    }

    public getMessageId(): number {
        return AllianceTaxCollectorDialogQuestionExtendedMessage.ID;
    }

    public reset(): void {
        this.alliance = new BasicNamedAllianceInformations();
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
        this.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1);
    }

    public serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1);
        this.alliance.serializeAs_BasicNamedAllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1);
    }

    public deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.alliance = new BasicNamedAllianceInformations();
        this.alliance.deserialize(param1);

    }
}

export = AllianceTaxCollectorDialogQuestionExtendedMessage;
