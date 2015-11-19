/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations');

class TaxCollectorMovementMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5633;

    hireOrFire: boolean;
    basicInfos: TaxCollectorBasicInformations;
    playerId: number;
    playerName: string;

    constructor() {
        this.hireOrFire = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.playerId = 0;
        this.playerName = '';
        super();
    }

    public getMessageId(): number {
        return TaxCollectorMovementMessage.ID;
    }

    public reset(): void {
        this.hireOrFire = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.playerId = 0;
        this.playerName = '';
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
        this.serializeAs_TaxCollectorMovementMessage(param1);
    }

    public serializeAs_TaxCollectorMovementMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.hireOrFire);
        this.basicInfos.serializeAs_TaxCollectorBasicInformations(param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorMovementMessage(param1);
    }

    public deserializeAs_TaxCollectorMovementMessage(param1: ICustomDataInput): void {
        this.hireOrFire = param1.readBoolean();
        this.basicInfos = new TaxCollectorBasicInformations();
        this.basicInfos.deserialize(param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of TaxCollectorMovementMessage.playerId.');
        }
        this.playerName = param1.readUTF();

    }
}

export = TaxCollectorMovementMessage;
