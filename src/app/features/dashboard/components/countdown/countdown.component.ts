import {Component, OnInit} from '@angular/core';
import {CountdownConfig, CountdownEvent} from "ngx-countdown";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss', '../../styles/main-content.scss']
})
export class CountdownComponent implements OnInit {

  public CountdownTimeUnits: Array<[string, number]> = [
    ['Y', 1000 * 60 * 60 * 24 * 365], // years
    ['M', 1000 * 60 * 60 * 24 * 30], // months
    ['D', 1000 * 60 * 60 * 24], // days
    ['H', 1000 * 60 * 60], // hours
    ['m', 1000 * 60], // minutes
    ['s', 1000], // seconds
    ['S', 1], // a million seconds
  ];

  public config: CountdownConfig = {
    prettyText: (text) => {
      return text
        .split('')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
    formatDate: ({ date, formatStr }) => {
      let duration = Number(date || 0);

      return this.CountdownTimeUnits.reduce((current, [name, unit]) => {
        if (current.indexOf(name) !== -1) {
          const v = Math.floor(duration / unit);
          duration -= v * unit;
          return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
            return v.toString().padStart(match.length, '0');
          });
        }
        return current;
      }, formatStr);
    }
  };

  constructor() { }

  ngOnInit(): void {
    const x = new Date("2022-10-19T22:06:00");
    const y = new Date();
    this.config.leftTime = Math.abs(x.getTime() - y.getTime()) / 1000;
  }

  public handleEvent(event: CountdownEvent): void {
  }

}
