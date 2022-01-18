"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const graphql_1 = require("@nestjs/graphql");
const pets_entity_1 = require("../pets/pets.entity");
const typeorm_1 = require("typeorm");
let Owner = class Owner {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], Owner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Owner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pets_entity_1.Pet, pet => pet.owner),
    (0, graphql_1.Field)(type => [pets_entity_1.Pet], { nullable: true }),
    __metadata("design:type", Array)
], Owner.prototype, "pets", void 0);
Owner = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=owner.entity.js.map