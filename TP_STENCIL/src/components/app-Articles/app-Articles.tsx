import { Component } from "@stencil/core";

@Component({
  tag: 'app-Articles',
  styleUrl: 'app-Articles.css',
})
export class AppArticles{
  
  
  textInput1: HTMLInputElement;
  textInput2: HTMLInputElement;
  textInput3: HTMLInputElement;
  
  

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    this.Pushdata();
  }
  Pushdata () {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
          title:  this.textInput1.value,
          autor: this.textInput2.value,
          article: this.textInput3.value
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            return responseJson.movies;
          })
          .catch((error) => {
            console.error(error);
          });
}
  render() {
    return (
      <div class="pic">
      <div class="form-style-5">
      <form onSubmit={this.handleSubmit}><hr/><fieldset>
      
        <label>
          Titre:
          <input type="text" name="field1" ref={(el: HTMLInputElement) => this.textInput1 = el} placeholder="Titre" />
        </label><hr/>
        <label>
          Auteur:
          <input type="text" name="field2" ref={(el: HTMLInputElement) => this.textInput2 = el}  placeholder="Auteur"/>
        </label><hr/>
        <label>
          Description :
          <input type="text" name="field3" ref={(el: HTMLInputElement) => this.textInput3 = el} placeholder="description" />
        </label><hr/>
        <input type="submit" value="Submit" /></fieldset>
      </form>
      </div>
      </div>
    );
  }
}