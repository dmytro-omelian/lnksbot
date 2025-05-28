import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getLandingPage() {
    return {
      title: 'lnksbot - Your Tailored Newsletter on What You Read',
      description: 'Just add links, receive your daily dose of insights',
    };
  }

  @Get('terms')
  @Render('terms')
  getTermsPage() {
    return {
      title: 'Terms of Service - lnksbot',
      description: 'Terms and conditions for using lnksbot services',
    };
  }

  @Get('privacy')
  @Render('privacy')
  getPrivacyPage() {
    return {
      title: 'Privacy Policy - lnksbot',
      description: 'How lnksbot collects, uses, and protects your information',
    };
  }

  @Get('about')
  @Render('about')
  getAboutPage() {
    return {
      title: 'About Us - lnksbot',
      description: 'Learn about lnksbot, our mission, and our team',
    };
  }

  @Get('blog')
  @Render('blog')
  getBlogPage() {
    return {
      title: 'Blog - lnksbot',
      description: 'News, tips, and insights from the lnksbot team',
    };
  }

  @Get('careers')
  @Render('careers')
  getCareersPage() {
    return {
      title: 'Careers - lnksbot',
      description: 'Join our team and help build the future of content discovery',
    };
  }

  @Get('security')
  @Render('security')
  getSecurityPage() {
    return {
      title: 'Security - lnksbot',
      description: 'How lnksbot protects your data and ensures the security of our service',
    };
  }

  @Get('api/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
