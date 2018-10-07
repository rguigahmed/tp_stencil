import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: '../global/global.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        
   
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
           
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/Articles/:name' component='app-articles' />
              <stencil-route url='/details/:id' component='app-details' />
              <stencil-route url='/supp/:id' component='app-supp' />
              <stencil-route url='/modif/:id' component='app-modif' />

              
            </stencil-route-switch>
          </stencil-router>
         
        </main>
        
      </div>
    );
  }
}
