// feedreader.js

// We're placing all of our tests within the $() function,
// since some of these tests may require DOM elements. We want
// to ensure they don't run until the DOM is ready.
 
$(function() {
    
    describe('RSS Feeds', function() {
        // test to make sure that the
        // allFeeds variable has been defined and that it is not
        // empty. 

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // each feed in allFeeds are not empty and  has a name and URL defined

        it('has a valid URL', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });
        });

        it('has a valid name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy();
            });
        });
    });

    describe('The menu', function(){
        // it checks if the menu element is hidden by default 
        // and displays when clicked and hide when clicked again

        const body = document.querySelector('body');
        

        const menuIcon = document.getElementById('hamburger-menu');
        
        function toggleAndCheckVisibility(expectation){
            menuIcon.click();
            let hidden = body.classList.contains('menu-hidden');
            expect(hidden).toBe(expectation);
        }

        it ('is hidden', function(){
            let hidden = body.classList.contains('menu-hidden');
            expect(hidden).toBe(true);
        });
        
        it('toggles when is clicked', function(){
            toggleAndCheckVisibility(false);
            toggleAndCheckVisibility(true);
            toggleAndCheckVisibility(false);
            toggleAndCheckVisibility(true);
        });
    });

    describe('Initial Entries', function(){
        // checks if it has at least a single entry element on feed container
        
        beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
        });

        const feed = document.getElementsByClassName('feed');

        it('there is at least a feed container', function(){
            expect(feed.length).not.toBe(0);
        });
    });
  
    describe('New feed selection', function(){
        // it checks when a new feed is loaded if the content changes
        
        beforeEach(function(done){
            cleanFeed();
            loadFeed(0, function() {
                done();
            });
        });

        let feed = document.getElementsByClassName('entry-link');

        it('content changed', function(){
            expect(feed.length).not.toBe(0); 
        });
    });
}());
