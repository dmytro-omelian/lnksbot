import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLandingPage(): {
        title: string;
        description: string;
    };
    getTermsPage(): {
        title: string;
        description: string;
    };
    getPrivacyPage(): {
        title: string;
        description: string;
    };
    getAboutPage(): {
        title: string;
        description: string;
    };
    getBlogPage(): {
        title: string;
        description: string;
    };
    getCareersPage(): {
        title: string;
        description: string;
    };
    getSecurityPage(): {
        title: string;
        description: string;
    };
    getHello(): string;
}
