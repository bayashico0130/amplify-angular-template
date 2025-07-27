import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateClient, type Client } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';

@Component({
    selector: 'app-todos',
    imports: [CommonModule],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todos: Schema['Todo']['type'][] = [];
  private client!: Client<Schema>;

  ngOnInit(): void {
    setTimeout(() => {
      this.client = generateClient<Schema>();
      this.listTodos();
    }, 100);
  }

  listTodos() {
    try {
      this.client.models.Todo.observeQuery().subscribe({
        next: ({ items, isSynced }: { items: Schema['Todo']['type'][], isSynced: boolean }) => {
          this.todos = items;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  createTodo() {
    try {
      this.client.models.Todo.create({
        content: window.prompt('Todo content'),
      });
      this.listTodos();
    } catch (error) {
      console.error('error creating todos', error);
    }
  }
}
