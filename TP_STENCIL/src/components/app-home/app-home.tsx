
import { Component , State } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppPosts {

  @State() posts : any;

  componentWillLoad() {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/')
    .then(response => response.json())
    .then(data => {
    this.posts = data;
    console.log(this.posts);
    });
    }
minimaze(article: string): string{
  if(article){
    return article.substring(0,140);
  }
  return 'has no content';
}
  render() {
    return (
      <div class="pic"> 
      
      {   
          this.posts.map((item) => {
          return (<div class="listerarticles">
            <h2>Title : {this.minimaze(item.title)}</h2> <hr/>

           <h4>Article : {this.minimaze(item.article)}</h4> <hr/>
           <h5>Ecrit par  : {this.minimaze(item.autor)}</h5> <hr/>

            <h6>Fait le : {item.creationDate}</h6> <hr/>

          <stencil-route-link url={`/details/${item._id}`}>
          <div class="example_a"  >Détails</div>
          </stencil-route-link>
          <hr/>
          </div>
          )}
          )

      }
       
       
    </div>
  );
}
}