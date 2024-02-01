// Remove .html extension
var currentPath = window.location.pathname;
if (currentPath.endsWith('.html')) 
{
    var newPath = "home"
    history.replaceState({}, '', newPath);
}