import { OwnersService } from './owners.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
export declare class OwnersResolver {
    private readonly ownersService;
    constructor(ownersService: OwnersService);
    createOwner(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: number): Promise<Owner>;
}
