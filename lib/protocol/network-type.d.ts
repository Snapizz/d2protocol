import { ICustomDataOutput, ICustomDataInput } from './custom-data-wrapper';
interface INetworkType {
    serialize(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    getTypeId(): number;
    reset(): void;
}
export = INetworkType;
