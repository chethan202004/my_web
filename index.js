document.addEventListener("DOMContentLoaded",function showContent(component){
    //function to display content
    function showContent(component){
        var homePage = "<h1>Welcome to the Home Page</h1><p>This is the home content.</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p>";
        var contactPage = "<h1>Welcome to Contact Page</h1><p>This is the contact information.</p><a href=mailto:chethanv202004@gmail.com/>MAIL ME</a><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p>";
        var infoPage = "<h1>Welcome to Information Page</h1><p>This is the information content.</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p>";
        var guidePage = "<h1>Welcome to Guide Page</h1><p>Content in guide page.</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p>";
    
        var contentDiv=document.querySelector('#content');
    
    switch(component){
        case 'home':
            contentDiv.innerHTML= homePage;
            break;
    
        case 'contact':
            contentDiv.innerHTML=contactPage;
            break;
        
        case 'information':
            contentDiv.innerHTML=infoPage;
            break;
        
        case 'guide':
            contentDiv.innerHTML=guidePage;
            break;
        
        default:
            contentDiv.innerHTML="";
            break;
    }
    }
   


//getting all the links
var homeLink=document.getElementById ("home-link");
var contactLink=document.getElementById ("contact-link");
var informationLink=document.getElementById ("information-link");
var guideLink=document.getElementById ("guide-link");


//adding event listeners to all the links

homeLink.addEventListener("click",function() {
    showContent('home');
    setActiveLink(this);
});

contactLink.addEventListener("click",function() {
    showContent('contact');
    setActiveLink(this);
});

informationLink.addEventListener("click",function() {
    showContent('information');
    setActiveLink(this);
});


//function for active link
function setActiveLink(link){
    let links=document.getElementsByClassName('active');
    for(let i=0; i<links.length;i++){
        links[i].classList.remove('active');
    }

    //adding class to selected link
    link.classList.add('active');
}

//settind default content and adding active class
    showContent('home');
    homeLink.classList.add('active');
});

