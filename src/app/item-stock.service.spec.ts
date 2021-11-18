import { TestBed } from '@angular/core/testing';

import { ItemStockService } from './item-stock.service';

describe('ItemStockService', () => {
  let service: ItemStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
