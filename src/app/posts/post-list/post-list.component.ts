import { Component, OnInit, OnDestroy} from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
	// posts = [
	// 	{title: 'First Post', content: "This is the content of the first post"},
	// 	{title: 'Second Post', content: "This is the content of the second post"},
	// 	{title: 'Third Post', content: "This is the content of the third post"},
	// ];
	posts: Post[] = [];
	private postsSub: Subscription;
	// postsService: PostsService;

	constructor(public postsService: PostsService) {}

	ngOnInit(): void {
		this.postsService.getPosts();
		this.postsSub = this.postsService.getPostUpdateListener()
			.subscribe((posts: Post[]) => {
				this.posts = posts;
			});
	}

	ngOnDestroy() {
		this.postsSub.unsubscribe();
	}
}