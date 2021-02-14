    //This file is referenced by some pages on the site where
    //customers linger for longer than 30 minutes without
    //sending a request, like WheelSearch.jsp.
			
		function keepalive(){
		var keepAliveFrame = document.createElement("iframe")
		keepAliveFrame.src = "/keepSessionAlive.jsp"
		keepAliveFrame.style.display="none"
		document.body.appendChild(keepAliveFrame)
}
setTimeout("keepalive()",60000); 
