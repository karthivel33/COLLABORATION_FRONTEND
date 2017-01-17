var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	/*
	 * LOGIN
	 */
	
	.when('/',{
		templateUrl:'user/login.jsp',
		controller:'UserController'
	})
	
	.when('/login',{
		templateUrl:'user/login.jsp',
		controller:'UserController'
	})
	
	.when('/home',{
		templateUrl:'home/home.html',
		controller:'HomeController'
	})
	
	
	.when('/settings',{
		templateUrl:'user/settings.html',
		controller:'UserController'
		
	})
	
	
	.when('/topbar',{
		templateUrl:'shared/topbar.html',
		controller:'HomeController'
	})
	
	.when('/editprofile',{
		templateUrl:'user/editprofile.html',
		controller:'UserController'
	})
	
	
	
	
	
	.when('/about',{
		templateUrl:'about/AboutUs.html',
	})
	
	.when('/contact',{
		templateUrl:'about/ContactUs.html',
	})

	
	
	.when('/register',{
		templateUrl:'user/register.html',
		controller:'UserController'
		
	})
	
	/*
	 * ADMIN
	 */
		
	.when('/admin',{
		templateUrl:'user/admin.jsp',
		controller:'UserController'
		
	})
	
	.when('/manageUser',{
		templateUrl:'c_admin/manage_users.html',
		controller:'AdminController'
	})
	
	
	.when('/view_all_users',{
		templateUrl:'user/view_all_users.html',
		controller:'UserController'
		
	})

	.when('/view_all_jobs',{
		templateUrl:'job/view_all_jobs.html',
		controller:'JobController'
		
	})
	
	.when('/view_all_blogs',{
		templateUrl:'blog/view_all_blogs.html',
		controller:'BlogController'
		
	})
	
	
	/*
	 * EVENT
	 */
		
	.when('/my_event',{
		templateUrl:'event/my_event.html',
		controller:'EventController'
	})
	
	.when('/create_event',{
		templateUrl:'event/create_event.html',
		controller:'EventController'
	})
	
	.when('/list_event',{
		templateUrl:'event/list_event.html',
		controller:'EventController'
	})
	
	.when('/view_event',{
		templateUrl:'event/view_event.html',
		controller:'EventController'
	})
	
	.when('/view_all_events',{
		templateUrl:'event/view_all_events.html',
		controller:'EventController'
		
	})
	
	/*
	 * BLOG
	**/
	
	.when('/my_blog',{
		templateUrl:'blog/my_blog.html',
		controller:'BlogController'
	})
	
	.when('/create_blog',{
		templateUrl:'blog/create_blog.html',
		controller:'BlogController'
	})
	
	.when('/list_blog',{
		templateUrl:'blog/list_blog.html',
		controller:'BlogController'
	})
	
	
	.when('/addNew',{
		templateUrl:'c_blog/addNew.html',
		controller:'BlogController'
	})
	
	
	
	.when('/view_blog',{
		templateUrl:'blog/view_blog.html',
		controller:'BlogController'
	})
	
	.when('/view_blog_comment',{
		templateUrl:'c_blog/view_blog_comment.html',
		controller:'BlogController'
	})
	
	/*
	 * FRIEND RELATED MAPPING
	 **/
	
	.when('/list_friend',{
		templateUrl:'friend/list_friend.html',
		controller:'RequestController'
	})
	
	.when('/view_friend',{
		templateUrl:'friend/view_friend.html',
		controller:'FriendController'
	})
	

	
	/*
	 * FORUM RELATED MAPPING 
	 **/
	
	.when('/create_forum',{
		templateUrl:'forum/create_forum.html',
		controller:'ForumController'
	})
	
	.when('/list_forum',{
		templateUrl:'forum/list_forum.html',
		controller:'ForumController'
	})
	
	.when('/view_forum',{
		templateUrl:'forum/view_forum.html',
		controller:'ForumController'
	})
	
	.when('/my_forum',{
		templateUrl:'forum/my_forum.html',
		controller:'ForumController'
	})
		
	.when('/view_all_forums',{
		templateUrl:'forum/view_all_forums.html',
		controller:'ForumController'
		
	})
	/*
	 * JOB RELATED MAPPING
	 **/
	
	.when('/create_job',{
		templateUrl:'job/create_job.html',
		controller:'JobController'
	})
	
	.when('/list_job',{
		templateUrl:'job/list_job.html',
		controller:'JobController'
	})
	
	.when('/view_job',{
		templateUrl:'job/view_job.html',
		controller:'JobController'
	})
	
	.when('/my_job',{
		templateUrl:'job/my_job.html',
		controller:'JobController'
	})
	
	/*
	 * CHAT RELATED MAPPING
	 */
	.when('/chat',{
		templateUrl:'chat/chat.html',
		controller:'ChatController'

	})
	
	.otherwise({redirectTo: '/'});

});

