import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotographerApiService } from 'src/app/api/services/photographer-api.service';
import { Result } from 'src/app/api/interfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {

  id!: string;
  photographer!: Result;
  favAdded: boolean = false


  constructor(
    private readonly photographerApiS: PhotographerApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) =>
      this.photographerApiS
        .getById(Number(id))
        .subscribe((e) => (this.photographer = e))
    );
  }

  goBack() { this.location.back() }

}
