import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  target$: any;
  chart: any = [];
  chart1: any = [];

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.target$ = params.id)
  }

  ngOnInit() {
    this.data.getCompanyById(this.target$).subscribe(data => {
      this.target$ = data;
      console.log(this.target$)
      let quarterRevenues = [];
      let quarterEbitda = [];
      for (let money of Object.values(this.target$.revenue)) {
        quarterRevenues.push((<any>money).slice(1))
      }

      for (let money of Object.values(this.target$.ebitda)) {
        quarterEbitda.push((<any>money).slice(1))
      }

      this.chart = new Chart('canvasRev', {
        type: 'line',
        data: {
          labels: Object.keys(this.target$.revenue),
          datasets: [
            {
              data: quarterRevenues,
              borderColor: "#3cba9f",
              fill: false,
              label: 'Revenue per Q'
            }

          ]
        },
        options: {
          title: {
            display: true,
            text:'Quarterly Revenue Trend'
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                labelString: 'Quarters',
                display: true
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                labelString: 'Revenue',
                display: true
              }
            }],
          }
        }
      });

      this.chart1 = new Chart('canvasEbitda', {
        type: 'line',
        data: {
          labels: Object.keys(this.target$.ebitda),
          datasets: [
            {
              data: quarterEbitda,
              borderColor: "yellow",
              fill: false,
              label: 'Ebitda per Q'
            }

          ]
        },
        options: {
          title: {
            display: true,
            text:'EBITDA Trend'
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                labelString: 'Quarters',
                display: true
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                labelString: 'EBITDA',
                display: true
              }
            }],
          }
        }
      });

    })


  }

}
