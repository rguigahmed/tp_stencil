/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppArticles {}
  interface AppArticlesAttributes extends StencilHTMLAttributes {}

  interface AppDetails {
    'match': MatchResults;
  }
  interface AppDetailsAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppModif {
    'match': MatchResults;
  }
  interface AppModifAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppSupp {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppSuppAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppArticles': Components.AppArticles;
    'AppDetails': Components.AppDetails;
    'AppHome': Components.AppHome;
    'AppModif': Components.AppModif;
    'AppRoot': Components.AppRoot;
    'AppSupp': Components.AppSupp;
  }

  interface StencilIntrinsicElements {
    'app-articles': Components.AppArticlesAttributes;
    'app-details': Components.AppDetailsAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-modif': Components.AppModifAttributes;
    'app-root': Components.AppRootAttributes;
    'app-supp': Components.AppSuppAttributes;
  }


  interface HTMLAppArticlesElement extends Components.AppArticles, HTMLStencilElement {}
  var HTMLAppArticlesElement: {
    prototype: HTMLAppArticlesElement;
    new (): HTMLAppArticlesElement;
  };

  interface HTMLAppDetailsElement extends Components.AppDetails, HTMLStencilElement {}
  var HTMLAppDetailsElement: {
    prototype: HTMLAppDetailsElement;
    new (): HTMLAppDetailsElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppModifElement extends Components.AppModif, HTMLStencilElement {}
  var HTMLAppModifElement: {
    prototype: HTMLAppModifElement;
    new (): HTMLAppModifElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSuppElement extends Components.AppSupp, HTMLStencilElement {}
  var HTMLAppSuppElement: {
    prototype: HTMLAppSuppElement;
    new (): HTMLAppSuppElement;
  };

  interface HTMLElementTagNameMap {
    'app-articles': HTMLAppArticlesElement
    'app-details': HTMLAppDetailsElement
    'app-home': HTMLAppHomeElement
    'app-modif': HTMLAppModifElement
    'app-root': HTMLAppRootElement
    'app-supp': HTMLAppSuppElement
  }

  interface ElementTagNameMap {
    'app-articles': HTMLAppArticlesElement;
    'app-details': HTMLAppDetailsElement;
    'app-home': HTMLAppHomeElement;
    'app-modif': HTMLAppModifElement;
    'app-root': HTMLAppRootElement;
    'app-supp': HTMLAppSuppElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
