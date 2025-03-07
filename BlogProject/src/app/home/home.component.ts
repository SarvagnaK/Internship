import { CommonModule } from '@angular/common';
import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute, RouterOutlet,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private searchService: SearchService,private http: HttpClient){
  }

  @Input() noResultsFound: boolean = false;
  @Input() searchQuery: string = '';


  NavigateToBlog(link:string) :void
  {
    if(link)
    {
      window.open(link,"_blank");
    }
    else {
      console.warn("URL not available for this blog");
    }
    // this.router.navigateByUrl("/blog");
    
    

  }

  blogList:any[] =[];
//  searchQuery:string='';
  apiKey:string ="15de36faff4643729fb4004fe9695ec9";

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      console.log(this.searchQuery + "1st fetch");
      
      this.fetchBlogs();
    });

    // Listen for real-time search updates using RxJS BehaviorSubject
    this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
console.log(query+" in home component ");

      

      this.fetchBlogs();
      
    });

  }


        fetchBlogs()
         {


// console.log("momoommo");



let apiUrl='';
if (this.searchQuery.toLowerCase() === 'usa') {
  apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`;
} else {
  apiUrl=`https://newsapi.org/v2/everything?q=${this.searchQuery}&from=2025-03-05&sortBy=publishedAt&apiKey=15de36faff4643729fb4004fe9695ec9`;
  // apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`;
  // apiUrl=`https://newsapi.org/v2/everything?q=${this.searchQuery.toLowerCase()}&from=2025-02-04&sortBy=publishedAt&apiKey=15de36faff4643729fb4004fe9695ec9`;
}
    this.http.get<any>(apiUrl).subscribe(response => {
      this.blogList = response.articles || [];
    });
    console.log(this.searchQuery + "2nd");
    
  }
  



  getTwoSentences(text: string): string {
    if (!text) return ''; 
  
    let sentences = text.match(/[^.!?]+[.!?]+/g);
  
    if (!sentences) return text; 
  
    // Join first two sentences
    return sentences.slice(0, 2).join(' ');
  }
  

  trackByFunction(index: number, item: any): number {
    return item.urlToImage ? item.urlToImage.length : index;
  }

}
