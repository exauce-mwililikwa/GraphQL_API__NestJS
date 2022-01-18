import { Owner } from "src/owners/entities/owner.entity";
export declare class Pet {
    id: number;
    name: string;
    type?: string;
    ownerId: number;
    owner: Owner;
}
