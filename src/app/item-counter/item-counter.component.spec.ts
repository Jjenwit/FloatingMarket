import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemCounterComponent } from './item-counter.component';

describe('ItemCounterComponent', () => {
  let component: ItemCounterComponent;
  let fixture: ComponentFixture<ItemCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCounterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
