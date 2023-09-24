import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorWorks } from 'src/app/model/author-works';
import { WorksEntry } from 'src/app/model/works-entry';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-works',
  templateUrl: './author-works.component.html',
  styleUrls: ['./author-works.component.css']
})
export class AuthorWorksComponent implements OnInit {
  authorKey: string='';
  authorWorks!: AuthorWorks;
  modalService: any;
  constructor(
    private route: ActivatedRoute,
    private authorWorksService: AuthorService,
    private router: Router // Inject the Router service
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const authorKeyParam = params.get('authorKey');
      if (authorKeyParam !== null) {
        this.authorKey = authorKeyParam;
        this.loadAuthorWorks();
      } else {
        // Handle the case when 'authorKey' is null (e.g., display an error message)
      }
    });
  }
  loadAuthorWorks() {
    this.authorWorksService.getAuthorWorks(this.authorKey).subscribe(
      (data) => {
        this.authorWorks = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  goBack() {
    this.router.navigate(['/home']); // Điều hướng về trang chính
  }
  openWorkDetailsModal(work: WorksEntry): void { // Pass WorksEntry data
    this.modalService.openWorkDetailsModal(work);
  }
}
