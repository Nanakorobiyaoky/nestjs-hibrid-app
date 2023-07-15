import { Test, TestingModule } from '@nestjs/testing';
import { BMsController } from './b-ms.controller';
import { BMsService } from './b-ms.service';

describe('BMsController', () => {
  let bMsController: BMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BMsController],
      providers: [BMsService],
    }).compile();

    bMsController = app.get<BMsController>(BMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bMsController.getHello()).toBe('Hello World!');
    });
  });
});
