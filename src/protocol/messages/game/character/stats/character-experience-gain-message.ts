/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class CharacterExperienceGainMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6321;

    experienceCharacter: number;
    experienceMount: number;
    experienceGuild: number;
    experienceIncarnation: number;

    constructor() {
        this.experienceCharacter = 0;
        this.experienceMount = 0;
        this.experienceGuild = 0;
        this.experienceIncarnation = 0;
        super();
    }

    public getMessageId(): number {
        return CharacterExperienceGainMessage.ID;
    }

    public reset(): void {
        this.experienceCharacter = 0;
        this.experienceMount = 0;
        this.experienceGuild = 0;
        this.experienceIncarnation = 0;
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
        this.serializeAs_CharacterExperienceGainMessage(param1);
    }

    public serializeAs_CharacterExperienceGainMessage(param1: ICustomDataOutput): void {
        if (this.experienceCharacter < 0 || this.experienceCharacter > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceCharacter + ') on element experienceCharacter.');
        }
        param1.writeVarLong(this.experienceCharacter);
        if (this.experienceMount < 0 || this.experienceMount > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceMount + ') on element experienceMount.');
        }
        param1.writeVarLong(this.experienceMount);
        if (this.experienceGuild < 0 || this.experienceGuild > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceGuild + ') on element experienceGuild.');
        }
        param1.writeVarLong(this.experienceGuild);
        if (this.experienceIncarnation < 0 || this.experienceIncarnation > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceIncarnation + ') on element experienceIncarnation.');
        }
        param1.writeVarLong(this.experienceIncarnation);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterExperienceGainMessage(param1);
    }

    public deserializeAs_CharacterExperienceGainMessage(param1: ICustomDataInput): void {
        this.experienceCharacter = param1.readVarUhLong();
        if (this.experienceCharacter < 0 || this.experienceCharacter > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceCharacter + ') on element of CharacterExperienceGainMessage.experienceCharacter.');
        }
        this.experienceMount = param1.readVarUhLong();
        if (this.experienceMount < 0 || this.experienceMount > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceMount + ') on element of CharacterExperienceGainMessage.experienceMount.');
        }
        this.experienceGuild = param1.readVarUhLong();
        if (this.experienceGuild < 0 || this.experienceGuild > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceGuild + ') on element of CharacterExperienceGainMessage.experienceGuild.');
        }
        this.experienceIncarnation = param1.readVarUhLong();
        if (this.experienceIncarnation < 0 || this.experienceIncarnation > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceIncarnation + ') on element of CharacterExperienceGainMessage.experienceIncarnation.');
        }

    }
}

export = CharacterExperienceGainMessage;
