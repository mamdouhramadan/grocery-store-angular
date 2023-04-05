import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  posts = [
    {
      id: 1,
      title: "6 ways to prepare breakfast for 30",
      description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      image: 'blog-2.jpg',
      comments: 4,
    },
    {
      id: 2,
      title: "Visit the clean farm in the US",
      description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      image: 'blog-3.jpg',
      comments: 1,
    },
    {
      id: 3,
      title: "Cooking tips make cooking simple",
      description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      image: 'blog-1.jpg',
      comments: 5,
    },
    {
      id: 4,
      title: "Cooking tips make cooking simple",
      description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      image: 'blog-4.jpg',
      comments: 5,
    },
    {
      id: 5,
      title: "The Moment You Need To Remove Garlic From The Menu",
      description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      image: 'blog-4.jpg',
      comments: 2,
    },
    {
      id: 6,
      title: "Cooking tips make cooking simple",
      description: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      image: 'blog-6.jpg',
      comments: 9,
    },
  ]
}
