import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ClassDirective,TimesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
      title: 'By the Port',
      url: 'https://images.unsplash.com/photo-1519136260974-9c8447960444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBvcnR8ZW58MHx8MHx8fDA%3D'
    }, {
      title: 'In the Village',
      url: 'https://plus.unsplash.com/premium_photo-1723485739866-5ddf9be9db2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW4lMjB0aGUlMjB2aWxsYWdlfGVufDB8fDB8fHww'
    }, {
      title: 'On the Ferry',
      url: 'https://images.unsplash.com/photo-1719765346860-e329cc13a5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T24lMjB0aGUlMjBGZXJyeXxlbnwwfHwwfHx8MA%3D%3D'
    }, {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
      title: 'By the Port',
      url: 'https://images.unsplash.com/photo-1519136260974-9c8447960444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBvcnR8ZW58MHx8MHx8fDA%3D'
    }, {
      title: 'In the Village',
      url: 'https://plus.unsplash.com/premium_photo-1723485739866-5ddf9be9db2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW4lMjB0aGUlMjB2aWxsYWdlfGVufDB8fDB8fHww'
    }, {
      title: 'On the Ferry',
      url: 'https://images.unsplash.com/photo-1719765346860-e329cc13a5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T24lMjB0aGUlMjBGZXJyeXxlbnwwfHwwfHx8MA%3D%3D'
    }, {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
      title: 'By the Port',
      url: 'https://images.unsplash.com/photo-1519136260974-9c8447960444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBvcnR8ZW58MHx8MHx8fDA%3D'
    }, {
      title: 'In the Village',
      url: 'https://plus.unsplash.com/premium_photo-1723485739866-5ddf9be9db2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW4lMjB0aGUlMjB2aWxsYWdlfGVufDB8fDB8fHww'
    }, {
      title: 'On the Ferry',
      url: 'https://images.unsplash.com/photo-1719765346860-e329cc13a5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T24lMjB0aGUlMjBGZXJyeXxlbnwwfHwwfHx8MA%3D%3D'
    }, {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
      title: 'By the Port',
      url: 'https://images.unsplash.com/photo-1519136260974-9c8447960444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBvcnR8ZW58MHx8MHx8fDA%3D'
    }, {
      title: 'In the Village',
      url: 'https://plus.unsplash.com/premium_photo-1723485739866-5ddf9be9db2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW4lMjB0aGUlMjB2aWxsYWdlfGVufDB8fDB8fHww'
    }, {
      title: 'On the Ferry',
      url: 'https://images.unsplash.com/photo-1719765346860-e329cc13a5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T24lMjB0aGUlMjBGZXJyeXxlbnwwfHwwfHx8MA%3D%3D'
    }, {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
      title: 'By the Port',
      url: 'https://images.unsplash.com/photo-1519136260974-9c8447960444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBvcnR8ZW58MHx8MHx8fDA%3D'
    }, {
      title: 'In the Village',
      url: 'https://plus.unsplash.com/premium_photo-1723485739866-5ddf9be9db2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW4lMjB0aGUlMjB2aWxsYWdlfGVufDB8fDB8fHww'
    }, {
      title: 'On the Ferry',
      url: 'https://images.unsplash.com/photo-1719765346860-e329cc13a5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T24lMjB0aGUlMjBGZXJyeXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
