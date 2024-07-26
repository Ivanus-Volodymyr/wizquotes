import { expect, describe, beforeEach, it } from '@jest/globals';

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      expect(appController.getHello()).toBe({ msg: 'Hello World!' });
    });
  });
});
