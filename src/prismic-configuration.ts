export interface PrismicConfiguration {
  apiEndpoint: string;
  accessToken?: string;
  linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://your-repo-name.prismic.io/api/v2',
  linkResolver(doc) {
    if (doc.type === 'page' ) {
      return `/page/${doc.uid}`;
    }
    return '/';
  }
};
