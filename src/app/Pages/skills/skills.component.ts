import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  // front-end skills
  openLinkHTML() {
    window.open('https://www.w3schools.com/html/', '_blank');
  }
  openLinkCSS() {
    window.open('https://www.w3schools.com/css/', '_blank');
  }
  openLinkJavaScript() {
    window.open('https://www.w3schools.com/js/', '_blank');
  }
  openLinkTypeScript() {
    window.open('https://www.w3schools.com/typescript/', '_blank');
  }
  openLinkAngular() {
    window.open('https://angular.dev/', '_blank');
  }
  openLinkRxjs() {
    window.open('https://rxjs.dev/', '_blank');
  }
  openLinkAngularMaterial() {
    window.open('https://rc.material.angular.io/', '_blank');
  }
  openLinkPrimeNG() {
    window.open('https://primeng.org/', '_blank');
  }
  openLinkBootstrap() {
    window.open('https://getbootstrap.com/', '_blank');
  }

  // other skills
 openLinkFigma() {
    window.open('https://www.figma.com/', '_blank');
  } 
 openLinkFirebase() {
    window.open('https://firebase.google.com/', '_blank');
  } 
  openLinkXD() {
    window.open('https://helpx.adobe.com/th_th/xd/get-started.html', '_blank');
  }
  openLinkPhotoshop() {
    window.open('https://www.adobe.com/th_th/products/photoshop.html', '_blank');
  }
  openLinkPostman() {
    window.open('https://www.postman.com/', '_blank');
  }
  openLinkGit() {
    window.open('https://git-scm.com/', '_blank');
  }

}
