"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setViewEngine('hbs');
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on port: ${port}`);
}
async function handler(req, res) {
    const server = await core_1.NestFactory.create(app_module_1.AppModule);
    server.setViewEngine('hbs');
    server.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    server.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    server.enableCors();
    await server.init();
    const instance = server.getHttpAdapter().getInstance();
    return instance(req, res);
}
bootstrap();
//# sourceMappingURL=main.js.map