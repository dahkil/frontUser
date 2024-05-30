import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router){}
    userDataJson :any;
    userData:any;
    defaultImage = 'https://bootdey.com/img/Content/avatar/avatar1.png';
    imageSrc:string=this.defaultImage;
    ngOnInit(): void {
        this.userDataJson=  localStorage.getItem('userAuth')
        this.userData= JSON.parse(this.userDataJson)
        if (this.userData.imageName) {
            this.imageSrc = `assets/images/${this.userData.imageName}`;
          //  console.log(this.imageSrc)
          }
    }
    isWardrobeOpen = false;

    toggleWardrobe() {
        this.isWardrobeOpen = !this.isWardrobeOpen;
    }
    logOut(){
        localStorage.removeItem("userAuth");
        localStorage.removeItem("accessToken")
        this.router.navigate(['/register'])
    }

}
