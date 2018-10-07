import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
@Component({
  tag: 'app-details',
  styleUrl: '../../global/global.css',
  shadow: true
})

export class AppDetails {
    @Prop() match: MatchResults;

    @State() posts : any;


    componentWillLoad() {
        let url='https://polymer-101-workshop.cleverapps.io/api/blogpost/'
        let id = this.match.params.id;
        return fetch(url+id)
        .then(response => response.json())
      .then(data => {
      this.posts = data;
        });
  }
    
    render() {
        return (
          
          
        <div class="main-content">
                                     <hr/>

                    <h3 ><a href="/">{this.posts.title}</a></h3>
                    <hr/> 

                    
                    
                    <h5>{this.posts.article}</h5>
                    <h6>Ecrit par {this.posts.autor} date : {this.posts.creationDate}</h6>
                    <hr/> <hr/>
                  
                  

                  
        
          

                 
          
          <stencil-route-link url={'/supp/'+this.match.params.id}>
          <div class="example_a"> Supprimer </div> <hr/></stencil-route-link>
          <stencil-route-link url={'/modif/'+this.match.params.id}>
          <div class="example_a"> Modifier </div></stencil-route-link> <hr/>
          <stencil-route-link url='/'>
          
	        <div class="example_a"  >Retour </div>


	        
          </stencil-route-link> <hr/>
          </div>
	        
          
    
    );
  }
}