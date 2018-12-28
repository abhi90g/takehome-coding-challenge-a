import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Company } from '../classes/company';


@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {

  targets$: Company[];
  columns: string[];
  mockytargets$: Company[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.columns = this.data.getColumns();

    this.data.getAllData().subscribe(data => {
      this.targets$ = data;
      console.log(data);
    })
    

  }


  deleteItem(target: Company): void {
    this.data.removeCompany(target.id)
      .subscribe( data => {
        this.targets$ = this.targets$.filter(u => u !== target);
      })
  };

}
