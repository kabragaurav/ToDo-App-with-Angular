import {Component, OnInit} from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

export class Quicknotes {
  counter: number;
  title: string;
  content: string;
  task: string;
}

@Component({
  selector: 'app-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.css']
})
export class QuickNotesComponent implements OnInit {

  counterModel: number;
  titleModel: string;
  contentModel: string;
  taskModel: string;
  quicknotes: Quicknotes[];

  constructor() {
    this.counterModel = 0;
    this.titleModel = '';
    this.contentModel = '';
    this.taskModel = '';

    const defaultQuicknotes: Quicknotes = {
      counter: null,
      title: 'Developed with ♥ by',
      content: 'Gaurav Kabra',
      task: ''
    };

    this.quicknotes = [defaultQuicknotes];
  }
  ngOnInit() {
  }

  createQuicknotes() {

    const newQuicknotes: Quicknotes = {
      counter: this.counterModel,
      title: this.titleModel,
      content: this.contentModel,
      task: this.taskModel
    };

    this.quicknotes.push(newQuicknotes);
    this.counterModel += 1;

    // set the model values to '' again
    [this.titleModel,this.taskModel,this.contentModel] = ['','',''];
  }

}
