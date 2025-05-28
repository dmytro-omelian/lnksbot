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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getLandingPage() {
        return {
            title: 'lnksbot - Your Tailored Newsletter on What You Read',
            description: 'Just add links, receive your daily dose of insights',
        };
    }
    getTermsPage() {
        return {
            title: 'Terms of Service - lnksbot',
            description: 'Terms and conditions for using lnksbot services',
        };
    }
    getPrivacyPage() {
        return {
            title: 'Privacy Policy - lnksbot',
            description: 'How lnksbot collects, uses, and protects your information',
        };
    }
    getAboutPage() {
        return {
            title: 'About Us - lnksbot',
            description: 'Learn about lnksbot, our mission, and our team',
        };
    }
    getBlogPage() {
        return {
            title: 'Blog - lnksbot',
            description: 'News, tips, and insights from the lnksbot team',
        };
    }
    getCareersPage() {
        return {
            title: 'Careers - lnksbot',
            description: 'Join our team and help build the future of content discovery',
        };
    }
    getSecurityPage() {
        return {
            title: 'Security - lnksbot',
            description: 'How lnksbot protects your data and ensures the security of our service',
        };
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLandingPage", null);
__decorate([
    (0, common_1.Get)('terms'),
    (0, common_1.Render)('terms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTermsPage", null);
__decorate([
    (0, common_1.Get)('privacy'),
    (0, common_1.Render)('privacy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPrivacyPage", null);
__decorate([
    (0, common_1.Get)('about'),
    (0, common_1.Render)('about'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAboutPage", null);
__decorate([
    (0, common_1.Get)('blog'),
    (0, common_1.Render)('blog'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getBlogPage", null);
__decorate([
    (0, common_1.Get)('careers'),
    (0, common_1.Render)('careers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCareersPage", null);
__decorate([
    (0, common_1.Get)('security'),
    (0, common_1.Render)('security'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSecurityPage", null);
__decorate([
    (0, common_1.Get)('api/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map