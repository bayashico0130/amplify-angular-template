import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';

const mockTodos = [
  { id: '1', content: 'Test Todo 1', createdAt: '2023-01-01', updatedAt: '2023-01-01' },
  { id: '2', content: 'Test Todo 2', createdAt: '2023-01-02', updatedAt: '2023-01-02' }
];

jest.mock('aws-amplify/data', () => ({
  generateClient: jest.fn(() => ({
    models: {
      Todo: {
        observeQuery: jest.fn(() => ({
          subscribe: jest.fn((callback) => {
            callback.next({ items: mockTodos, isSynced: true });
          })
        })),
        create: jest.fn((todo) => Promise.resolve({ data: { ...todo, id: Date.now().toString() } }))
      }
    }
  }))
}));

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
