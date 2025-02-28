import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tailwind_proj';

  
  toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menu-btn");

    // if (menu && overlay && menuBtn) {
    //   menu.classList.toggle("hidden");
    //   overlay.classList.toggle("hidden");

    //   // Add smooth transition effect
    //   if (!menu.classList.contains("hidden")) {
    //     menu.classList.add("scale-100", "opacity-100");
    //     menu.classList.remove("scale-95", "opacity-0");
    //   } else {
    //     menu.classList.add("scale-95", "opacity-0");
    //     menu.classList.remove("scale-100", "opacity-100");
    //   }
    // }
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
