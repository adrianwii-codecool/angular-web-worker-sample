import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebWorkerPart1';
  output: any[] = [];
  worker: Worker;

  ngOnInit(): void {

    if (this.worker === undefined) {
      this.worker = new Worker('./webworker.worker', {type: 'module'});
      this.worker.onmessage = ({data}) => {
        console.log(data);
        this.output.push(data);
      };
    }
  }

  getData(): void {
    for (const page of [1, 2, 3, 4]) {
      this.worker.postMessage(`https://adrianwii.pl/api/news?page=${page}&limit=5`);
    }
  }
}
