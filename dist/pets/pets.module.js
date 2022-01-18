"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
const pets_resolver_1 = require("./pets.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const pets_entity_1 = require("./pets.entity");
const owners_module_1 = require("../owners/owners.module");
let PetsModule = class PetsModule {
};
PetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pets_entity_1.Pet]), owners_module_1.OwnersModule],
        providers: [pets_service_1.PetsService, pets_resolver_1.PetsResolver]
    })
], PetsModule);
exports.PetsModule = PetsModule;
//# sourceMappingURL=pets.module.js.map