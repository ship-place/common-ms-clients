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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsAuthClientService = void 0;
const common_1 = require("@nestjs/common");
const ms_client_module_1 = require("@ship-place/ms-client-module");
const ms_auth_pattern_1 = require("./ms-auth.pattern");
let MsAuthClientService = class MsAuthClientService {
    constructor(client) {
        this.client = client;
    }
    async ping() {
        return await this.client.send(ms_auth_pattern_1.MsAuthMessagePatterns.ping);
    }
    async login(message) {
        return await this.client.send(ms_auth_pattern_1.MsAuthMessagePatterns.login, message);
    }
    async refresh(message) {
        return await this.client.send(ms_auth_pattern_1.MsAuthMessagePatterns.refresh, message);
    }
    async logout(message) {
        return await this.client.send(ms_auth_pattern_1.MsAuthMessagePatterns.logout, message);
    }
    async validateAccessToken(message) {
        return await this.client.send(ms_auth_pattern_1.MsAuthMessagePatterns.validateAccessToken, message);
    }
    async getMyData(message) {
        return await this.client.send(ms_auth_pattern_1.MsAuthMessagePatterns.getMyData, message);
    }
};
MsAuthClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(ms_client_module_1.MsClientService)),
    __metadata("design:paramtypes", [ms_client_module_1.MsClientService])
], MsAuthClientService);
exports.MsAuthClientService = MsAuthClientService;
//# sourceMappingURL=ms-auth-client.service.js.map