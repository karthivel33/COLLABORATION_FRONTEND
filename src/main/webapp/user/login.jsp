<!DOCTYPE html>
<html lang="en">

<head>
<title>Home Page</title>
                    <!-- Javascript -->
	
	<script src="resources/js/bootstrap.js"></script>
	<script src="resources/js/webapp.js"></script>


                      <!-- Bootstrap css -->
          <link href="resources/css/register_style.css"  rel="stylesheet">
   
       <script src="resources/js/register.js"></script>
       
       <script>
       
       $(document).ready(function() {

    		//On click signup, hide login and show registration form
    		$("#signup").click(function() {
    			$("#first").slideUp("slow", function(){
    				$("#second").slideDown("slow");
    			});
    		});

    		//On click signup, hide registration and show login form
    		$("#signin").click(function() {
    			$("#second").slideUp("slow", function(){
    				$("#first").slideDown("slow");
    			});
    		});


    	});
       </script>
</head>

<body>
<div class="wrapper">
<!-- Login Procedure -->
	<br>
	<br>

	<div class="login_box">
	
		<div class="login_header">
				<h1>Amicon!</h1>
				Login or sign up below!
			</div>
			<br>
				<br>
<div id="first">
	
	                 <div data-ng-controller="UserController as ctrl">
		    								
						<form data-ng-submit="ctrl.login()" name="myForm">
						
						<input type="text" data-ng-model="ctrl.user.email" id="email" cssClass="form-control"  placeholder="Username"  required/>
									<span  class="glyphicon form-control-feedback" aria-hidden="true" ></span>
							
							
					
					<input type="password" data-ng-model="ctrl.user.password"  placeholder="Enter Password" id="password" required/>
				<span id="password1" class="glyphicon form-control-feedback" aria-hidden="true"></span>
			
							<br>
							<br>
						
							<input type="submit" value="Log In" name="login_button" />
							
						<br>
						<br>
							
							<a data-ng-href="#/register" id="signup" class="signup">Need and account? Register here!</a>
							
					<br>
						</form>
					</div>
			
				
			</div>
			</div>
			</div>
			

</body>
	<!-- Footer -->

</html>
