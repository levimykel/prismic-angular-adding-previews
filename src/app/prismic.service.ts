import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // to handle the Promises returned when we query the API

import * as Prismic from 'prismic-javascript';
import { CONFIG } from '../prismic-configuration';

@Injectable({ providedIn: 'root' })
export class PrismicService {

  constructor() {}

  getHomepageDocument(): Promise<void | Observable<Object>> {
    // First we need to retrieve the API object
    return Prismic.api(CONFIG.apiEndpoint, {accessToken: CONFIG.accessToken})
      .then((api) => {
        // Then we can query the Homepage document
        return api.getSingle('homepage')
        .then((document) => {
          return of(document);
        });
      })
      .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
  }
}
