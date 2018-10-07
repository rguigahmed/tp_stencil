

    import { 
        Component, State, 
        Prop } from 
        '@stencil/core';
    
        import { 
        MatchResults } from 
        '@stencil/router';
    
    
    
        @Component({
    
        tag: 
        'app-modif'
    
        })
    
        export 
        class AppModif {

            textInput1: HTMLInputElement;
            textInput2: HTMLInputElement;
            textInput3: HTMLInputElement;
    
        @State() 
        myArticle : any;
    
        @Prop() 
        match : MatchResults;
    
        title: 
        string;
    
        article: 
        string;
    
        autor: 
        string;
    
        _id : 
        any;
    
    
    
    
    
        componentWillLoad() {
    
        let 
        id = this.match.params.id;
    
        fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
    
        .then(response=>response.json()).
    
        then(data=>{
    
        this.myArticle=data;
    
        this.title =
        this.myArticle.title;
    
        this.article =
        this.myArticle.article;
    
        this.autor =
        this.myArticle.autor;
    
        this._id =
        this.myArticle._id;
    
        })
    
        }
    
    
    
        editArticle(e) {
    
        e.preventDefault();
    
        console.log("!");
    
        const 
        title = this.title;
    
        const 
        article = this.article;
    
        const 
        autor = this.autor;
    
        const 
        _id = this._id;
    
        const 
        postedited = {
    
        _id, 
    
        title,
    
        article,
    
        autor
    
        };
    
        fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
    
        method: 
        "PUT",
    
        headers: {
    
        Accept: 
        "application/json, text/plain, */*",
    
        "Content-Type":
        "application/json"
    
        },
    
        body: 
        JSON.stringify(postedited)
    
        })
    
        .then(function(res) {
    
        return res.json();
    
        }).then(function(data) {
    
        console.log(JSON.stringify(data));
    
        });
    
        }
    
    
    
    
        render() {
    
        return (
            <div>
    
            <form action="/action_page.php" method="post">
            <label>
              Titre:
              <input type="text" ref={(el: HTMLInputElement) => this.textInput1 = el} placeholder="Titre" onChange={(e:any) => (this.title = e.target.value)}/>
            </label>
            <label>
              Auteur:
              <input type="text" ref={(el: HTMLInputElement) => this.textInput2 = el}  placeholder="Auteur"onChange={(e:any) => (this.autor = e.target.value)}/>
            </label>
            <label>
              Description :
              <input type="text" ref={(el: HTMLInputElement) => this.textInput3 = el} placeholder="description" onChange={(e:any) => (this.article = e.target.value)}/>
            </label>
            
          </form>
          <stencil-route-link url="/">
            <button onClick={this.editArticle.bind(this)}>Submit

            </button>
            </stencil-route-link>
</div>
          
    
        );
    
        }
    
        }
    
    