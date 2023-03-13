"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsAuthClientModule = void 0;
const common_1 = require("@nestjs/common");
const ms_client_module_1 = require("@ship-place/ms-client-module");
const ms_auth_client_service_1 = require("./ms-auth-client.service");
const ms_auth_pattern_1 = require("./ms-auth.pattern");
let MsAuthClientModule = class MsAuthClientModule {
};
MsAuthClientModule = __decorate([
    (0, common_1.Module)({
        imports: [ms_client_module_1.MsClientModule.forRoot({ patterns: ms_auth_pattern_1.MsAuthMessagePatterns })],
        providers: [ms_auth_client_service_1.MsAuthClientService],
        exports: [ms_auth_client_service_1.MsAuthClientService],
    })
], MsAuthClientModule);
exports.MsAuthClientModule = MsAuthClientModule;
//# sourceMappingURL=ms-auth-client.module.js.map