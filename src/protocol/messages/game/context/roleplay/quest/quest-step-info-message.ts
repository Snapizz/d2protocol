/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import QuestActiveInformations = require('../../../../../types/game/context/roleplay/quest/quest-active-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class QuestStepInfoMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5625;

    infos: QuestActiveInformations;

    constructor() {
        this.infos = new QuestActiveInformations();
        super();
    }

    public getMessageId(): number {
        return QuestStepInfoMessage.ID;
    }

    public reset(): void {
        this.infos = new QuestActiveInformations();
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
        this.serializeAs_QuestStepInfoMessage(param1);
    }

    public serializeAs_QuestStepInfoMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.infos.getTypeId());
        this.infos.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestStepInfoMessage(param1);
    }

    public deserializeAs_QuestStepInfoMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.infos = <QuestActiveInformations>ProtocolTypeManager.getInstance(QuestActiveInformations, _loc2_);
        this.infos.deserialize(param1);

    }
}

export = QuestStepInfoMessage;
