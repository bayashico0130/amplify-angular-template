import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { generateClient, type Client } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Schema['Todo']['type'][] = [];
  private client!: Client<Schema>;

  ngOnInit(): void {
    this.client = generateClient<Schema>();
    this.listTodos();
  }

  listTodos() {
    try {
      this.client.models.Todo.observeQuery().subscribe({
        next: (i) => {
          this.todos = i.items;
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

  deleteTodo(id: string) {
    this.client.models.Todo.delete({ id });
  }
}
