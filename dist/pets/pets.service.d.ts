import { Owner } from '../owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pets.entity';
export declare class PetsService {
    private petsRepository;
    private ownersService;
    constructor(petsRepository: Repository<Pet>, ownersService: OwnersService);
    createPet(createPetInput: CreatePetInput): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: number): Promise<Pet>;
    getOwner(ownderId: number): Promise<Owner>;
}
