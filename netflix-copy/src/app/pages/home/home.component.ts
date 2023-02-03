import { Component, OnInit } from '@angular/core';
import { MovieApiSeviceService } from 'src/app/service/movie-api-sevice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiSeviceService) { }

  bannerResult:any=[];

  ngOnInit(): void {
    this.bannerData();
  }



  //bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    })
  }

}
