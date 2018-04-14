
document.body.style.border = "5px solid red";

var allLinks = document.querySelectorAll("a");
var links = [];
for (let link of allLinks) {
	links.push(link.href);
}

// Get video links
/*
var videoLinks = document.querySelectorAll("video");
for (let video of videoLinks) {
	for (let source of video.getElementsByTagName('source'))
		links.push(source.src);
}
*/
document.querySelectorAll("[src]").forEach( element => links.push(element.src) );

Array.prototype.unique = function(mutate) {
    var unique = this.reduce(function(accum, current) {
        if (accum.indexOf(current) < 0) {
            accum.push(current);
        }
        return accum;
    }, []);
    if (mutate) {
        this.length = 0;
        for (let i = 0; i < unique.length; ++i) {
            this.push(unique[i]);
        }
        return this;
    }
    return unique;
}

links.unique(true);
