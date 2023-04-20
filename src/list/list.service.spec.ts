import { Test, TestingModule } from '@nestjs/testing';
import { ListService } from './list.service';
import { List } from './entities/list.entity';

const mockList = {
  create: jest
    .fn()
    .mockReturnValue(Promise.resolve(new List({ name: 'my list' }))),
};

const mockHttpService = {
  post: jest.fn(),
};

describe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    service = new ListService(mockList as any, mockHttpService as any);
  });

  it('deve criar uma lista', async () => {
    const list = await service.create({ name: 'my list' });
    console.log(list);
  });
});
