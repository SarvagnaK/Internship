import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,BlogsComponent,ContactComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tailwind_proj';

constructor(private router: Router){
}
NavigateContact()
{
  this.router.navigateByUrl("/contact");
}
NavigateHome()
{
  this.router.navigateByUrl("/home");
}
NavigateAbout()
{
  this.router.navigateByUrl("/about");
}
NavigateBlog()
{
  this.router.navigateByUrl("/blog");
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
