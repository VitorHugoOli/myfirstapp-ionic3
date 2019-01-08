import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '/home/vitor/Documents/workspaces/ionic/myApp/src/providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public nome_usuario:string ="Platymints menezes gonçales"
  public objeto_feed={
      nome:"Platymints menezes gonçales",
      data:"November 5, 1955",
      descricao:"EStou criando um app... DAHORA",
      qntd_like: 12,
      qntd_comments: 4,
      time_comment:"11h ago"
  }
  public lista_filmes = new Array<any>();


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  public soma(num1:number, num2:number):void {
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.soma(25,10);
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response =(data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      },erro=>{
        console.log(erro);
      }
    )
    this.movieProvider.getPopularsMovies().subscribe(
      data=>{
        
        const response =(data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes=objeto_retorno.results;

        console.log(objeto_retorno);
      },erro=>{
        console.log(erro);
      }
    )
    
    console.log('ionViewDidLoad FeedPage');
  }

}
