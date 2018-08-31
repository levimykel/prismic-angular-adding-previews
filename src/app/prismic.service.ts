import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as Prismic from 'prismic-javascript';
import { CONFIG } from '../prismic-configuration';

@Injectable({ providedIn: 'root' })
export class PrismicService {

  constructor() {}

  // Get the API object which we will use for all our queries
  getApi(): Promise<void | any> {
    return Prismic.api(CONFIG.apiEndpoint, {accessToken: CONFIG.accessToken})
      .then((api) => {
        return api;
      })
      .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
  }

  // Get the Homepage Document
  getHomepageDocument(): Promise<void | Observable<Object>> {
    return this.getApi().then((api) => {
      return api.getSingle('homepage')
      .then((document) => {
        return of(document);
      });
    });
  }

  // Get the Navigation Document
  getNavigationDocument(): Promise<void | Observable<Object>> {
    return this.getApi().then((api) => {
      return api.getSingle('navigation')
      .then((document) => {
        return of(document);
      });
    });
  }

  // Get a Page Document by its UID value
  getPageDocument(uid: string): Promise<void | Observable<Object>> {
    return this.getApi().then((api) => {
      return api.getByUID('page', uid)
      .then((document) => {
        return of(document);
      });
    });
  }

  // Use the Link Resolver to return the correct url for your previews
  getPreviewUrl(token: string): Promise<string> {
    return this.getApi().then((api) => {
      return api.previewSession(token, CONFIG.linkResolver, '/').then((url) => {
        return of(url);
      });
    });
  }

  // Launch the prismic toolbar to add edit buttons to our pages
  toolbar(): void {
    window['PrismicToolbar'].setupEditButton(CONFIG.apiEndpoint);
  }
}
