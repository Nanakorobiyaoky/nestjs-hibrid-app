import { Test, TestingModule } from '@nestjs/testing';
import { AMsController } from './a-ms.controller';
import { AMsService } from './a-ms.service';

describe('AMsController', () => {
  let aMsController: AMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AMsController],
      providers: [AMsService],
    }).compile();

    aMsController = app.get<AMsController>(AMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(aMsController.getHello()).toBe('Hello World!');
    });
  });
});
