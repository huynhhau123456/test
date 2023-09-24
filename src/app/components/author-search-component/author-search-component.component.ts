  import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
  import { AuthorSearch } from 'src/app/model/author-search';
  import { DocAboutAuthor } from 'src/app/model/doc-about-author';
  import { AuthorService } from 'src/app/services/author.service';
import { AuthorDetailsModalComponent } from '../author-details-modal/author-details-modal.component';
import { Router } from '@angular/router';


  @Component({
    selector: 'app-author-search-component',
    templateUrl: './author-search-component.component.html',
    styleUrls: ['./author-search-component.component.css']
  })
  export class AuthorSearchComponentComponent implements OnInit{
    
    query: string = '';
    limit: number = 10;
    offset: number = 20;
    authors: DocAboutAuthor[] = []; // Sử dụng kiểu DocAboutAuthor thay vì any
    isLoading: boolean = false;
      
      
    
  
    constructor(
      private authorService: AuthorService,
      private router: Router,
      public dialog: MatDialog
      ) {}

    ngOnInit(): void {
      this.searchAuthors();
    }
    
    searchAuthors(): void {
      this.isLoading = true; // Hiển thị biểu tượng tải
       

        this.authorService.searchAuthors(this.query, this.limit, this.offset).subscribe(
          (response: AuthorSearch) => {
            if (response && response.docs) {
              this.authors = response.docs;
            } else {
              this.authors = [];
            }
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            console.error(error);
          }
        );
      }
    openAuthorDetailsModal(authorKey: string) {
      this.authorService.getAuthorDetails(authorKey).subscribe((data) => {
        const dialogRef = this.dialog.open(AuthorDetailsModalComponent, {
          data: data,
      
        });
      });
    }
    prevPage(): void {
      if (this.offset > 0) { // Kiểm tra xem có trang trước không
        this.offset -= this.limit;
        this.searchAuthors();
      }
    }
    
    nextPage(): void {
      if (this.authors.length === this.limit) { // Kiểm tra xem có trang sau không
        this.offset += this.limit;
        this.searchAuthors();
      }
    }
    
    getCurrentPage(): number {
      return Math.floor(this.offset / this.limit) + 1;
    }
    // viewAuthorWorks(authorKey: string) {
    //   // Sử dụng Router để điều hướng đến trang tác phẩm của tác giả dựa trên key
    //   this.router.navigate([`/authors/${authorKey}/works`]);
    // }
    // goBack() {
    //   this.router.navigate(['/']); // Điều hướng về trang chính
    // }
  }
