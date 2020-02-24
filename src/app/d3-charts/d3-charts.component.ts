import { Component, ElementRef, OnChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as c3 from 'c3';

interface DataValues {
  letter: string;
  frequency: number;
}

@Component({
  selector: 'app-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.css', "../../../node_modules/c3/c3.min.css"]
})
export class D3ChartsComponent implements OnChanges {

  margin = {top: 20, right: 20, bottom: 30, left: 40};
  data: DataValues[] = [
    {
      "letter": "A",
      "frequency": 0.08167
    },
    {
      "letter": "B",
      "frequency": 0.01492
    },
    {
      "letter": "C",
      "frequency": 0.02782
    },
    {
      "letter": "D",
      "frequency": 0.04253
    },
    {
      "letter": "E",
      "frequency": 0.12702
    },
    {
      "letter": "F",
      "frequency": 0.02288
    },
    {
      "letter": "G",
      "frequency": 0.02015
    },
    {
      "letter": "H",
      "frequency": 0.06094
    },
    {
      "letter": "I",
      "frequency": 0.06966
    },
    {
      "letter": "J",
      "frequency": 0.00153
    },
    {
      "letter": "K",
      "frequency": 0.00772
    },
    {
      "letter": "L",
      "frequency": 0.04025
    },
    {
      "letter": "M",
      "frequency": 0.02406
    },
    {
      "letter": "N",
      "frequency": 0.06749
    },
    {
      "letter": "O",
      "frequency": 0.07507
    },
    {
      "letter": "P",
      "frequency": 0.01929
    },
    {
      "letter": "Q",
      "frequency": 0.00095
    },
    {
      "letter": "R",
      "frequency": 0.05987
    },
    {
      "letter": "S",
      "frequency": 0.06327
    },
    {
      "letter": "T",
      "frequency": 0.09056
    },
    {
      "letter": "U",
      "frequency": 0.02758
    },
    {
      "letter": "V",
      "frequency": 0.00978
    },
    {
      "letter": "W",
      "frequency": 0.0236
    },
    {
      "letter": "X",
      "frequency": 0.0015
    },
    {
      "letter": "Y",
      "frequency": 0.01974
    },
    {
      "letter": "Z",
      "frequency": 0.00074
    }
  ];

  constructor(private chartContainer: ElementRef) {
    this.createLineChart();
  }
  
  
  ngOnChanges(): void {
    if (!this.data) { return; }
  }

  ngAfterViewInit() {
    c3.generate({
      bindto: '#c3Barchart',
      data: {
          columns: [
              ['data1', -30, 200, 200, 400, -150, 250],
              ['data2', 130, 100, -100, 200, -150, 50],
              ['data3', -230, 200, 200, -300, 250, 250]
          ],
          type: 'bar',
          groups: [
              ['data1', 'data2']
          ]
      },
      grid: {
          y: {
              lines: [{value:0}]
          }
      }
    });
    
    c3.generate({
      bindto: '#c3Piechart',
      data: {
          // iris data from R
          columns: [
              ['data1', 30],
              ['data2', 120],
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    });

    c3.generate({
      bindto: '#c3Gaugechart',
      data: {
          columns: [
              ['data', 91.4]
          ],
          type: 'gauge',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      gauge: {
      },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
              values: [30, 60, 90, 100]
          }
      },
      size: {
          height: 180
      }
    });

    c3.generate({
      bindto: '#c3ScatterPlotchart',
      data: {
          xs: {
              setosa: 'setosa_x',
              versicolor: 'versicolor_x',
          },
          // iris data from R
          columns: [
              ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
              ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
              ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
              ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ],
          type: 'scatter'
      },
      axis: {
          x: {
              label: 'Sepal.Width',
              tick: {
                  fit: false
              }
          },
          y: {
              label: 'Petal.Width'
          }
      }
    });
  

    this.createLineChart();
  }

  private createLineChart(): void {
    d3.select('svg').remove();
    debugger
    const element = this.chartContainer.nativeElement;
    const data = this.data;
    const svg = d3.select(element).append('svg')
        .attr('width', (element.offsetWidth || 390))
        .attr('height', (element.offsetHeight || 390));

    const contentWidth = Math.abs((element.offsetWidth || 390) - this.margin.left - this.margin.right);
    const contentHeight = Math.abs((element.offsetHeight || 390) - this.margin.top - this.margin.bottom);

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.letter));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.frequency)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.letter))
        .attr('y', d => y(d.frequency))
        .attr('width', x.bandwidth())
        .attr('height', d => Math.abs(contentHeight - y(d.frequency)));
  
  }

  // onResize() {
  //   this.createChart();
  // }
}
