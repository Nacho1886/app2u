import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, concatMap } from 'rxjs';
import { LocalData } from '../../interfaces/local-data.interface';
import { PhotographerService } from '../../services/photographer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: LocalData;

  loadingData: boolean = false;

  constructor(
    private readonly photographerService: PhotographerService,
    private router: Router
  ) {
    this.data = this.photographerService.loadPhotographers().getValue();
  }
  ngOnInit(): void {
    if (this.data.results.length === 0) this.loadingEvent();
  }

  @HostListener('window:scroll') onScroll() {
    const windowScrolled = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    const dataNeeded = !this.loadingData && !this.data.allData;

    if (windowScrolled && dataNeeded) this.loadingEvent();
  }

  loadingEvent() {
    this.loadingData = true;
    this.photographerService.getPhotographers()
      .subscribe(() => this.loadingData = false);
  }

  goToPhotographer(id: number) {
    /* const urlArray = urlString.split('/').reverse().filter(e => e)
    const id = urlArray.find(e => !isNaN(Number(e))) */
    this.router.navigate([`photographers/${id}`]);
  }
}
