import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebWorkerPart1';
  output: any;
  worker: Worker;

  ngOnInit(): void {

    if (this.worker === undefined) {
      this.worker = new Worker('./webworker.worker', {type: 'module'});
      this.worker.onmessage = ({data}) => {
        this.output = data;
      };
    }
  }

  getData(): void {
    this.worker.postMessage(5);
  }
}
