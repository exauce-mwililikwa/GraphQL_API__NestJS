import { Owner } from 'src/owners/entities/owner.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';
export declare class PetsResolver {
    private petsService;
    constructor(petsService: PetsService);
    getPet(id: number): Promise<Pet>;
    pets(): Promise<Pet[]>;
    owner(pet: Pet): Promise<Owner>;
    createPet(createPetInput: CreatePetInput): Promise<Pet>;
}
