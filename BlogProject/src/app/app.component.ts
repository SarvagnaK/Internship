import { Component,inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule,HomeComponent,ContactComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'BlogProject';

  constructor(private router: Router,private http: HttpClient,private searchService: SearchService){
  
  }

  NavigateContact()
{
  this.router.navigateByUrl("/contact");
}
NavigateHome()
{
  // this.router.navigateByUrl("/home");
  this.router.navigate(['/home'], { queryParams: {} });
  this.searchService.setSearchQuery('techcrunch');
}

searchQuery: string = ''; // Stores user input
  blogList: any[] = []; // Stores fetched news articles
  noResultsFound: boolean = false;


  searchNews() {

    console.log(this.searchQuery + " first here- app comp");
    
    if (!this.searchQuery.trim()) {
      alert('Please enter a search query');
      return;
    }
  
  else if (this.searchQuery.trim()) {
    this.noResultsFound=false;
      this.router.navigate(['/home'], { queryParams: { search: this.searchQuery.trim() } });
      this.searchService.setSearchQuery(this.searchQuery.trim()); // Notify HomeComponent

      // console.log("query is usa in app comp");
      
    }
    else {
      this.noResultsFound=true;
    }
  
  }
  
  toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menu-btn");

    
    if(menu && overlay && menuBtn)
    {
      menu.classList.toggle("hidden"); 
            overlay.classList.toggle("hidden");

            // Change menu button color when active
            if (!menu.classList.contains("hidden")) {
                menuBtn.classList.add("text-blue-600", "font-bold");
            } else {
                menuBtn.classList.remove("text-blue-600", "font-bold");
            }
    }
    
  }

  closeMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menu-btn");

    if (menu && overlay && menuBtn) {
      menu.classList.add("hidden"); 
            overlay.classList.add("hidden");
            menuBtn.classList.remove("text-blue-600", "font-bold");
    }
  }

}
