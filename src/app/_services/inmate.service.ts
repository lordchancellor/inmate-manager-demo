import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import data from '../_data/inmates.json';
import { mapInmates } from "../_helpers";
import { Inmate } from "../_models";

@Injectable({
  providedIn: 'root'
})
export class InmateService {
  constructor() { }

  public getInmates(): Observable<Inmate[]> {
    return of(data.data).pipe(mapInmates);
  }
}