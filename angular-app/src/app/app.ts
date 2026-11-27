import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
  private testLintError(): number {
    const unusedVariable = 10;
    return unusedVariable;
  }
  private buildError(): string {
    const value = '123';
    return value;
  }
}