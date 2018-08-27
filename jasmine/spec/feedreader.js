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
            for (let i = 0; i<allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
                expect(allFeeds[i].url).not.toBeUndefined();
                expect(allFeeds[i].url.length).not.toBe(0);     
            }
        });

        it('has a valid name', function(){
            for(let i = 0; i<allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(null);
                expect(allFeeds[i].name).not.toBeUndefined();
                expect(allFeeds[i].name.length).not.toBe(0); 
            }
        });
    });

    describe('The menu', function(){
        // it checks if the menu element is hidden by default 
        // and displays when clicked and hide when clicked again

        const menu = document.getElementsByClassName('menu-hidden');
        const menuIcon = document.getElementsByClassName('menu-icon-link');
        
        it ('is hidden', function(){
            expect(menu.length).not.toBe(0);
        });
   
        it('displays when is clicked', function(){
            menuIcon[0].click();
            expect(menu.length).toBe(0);
        });

        it('hides when is clicked again', function(){
            menuIcon[0].click();
            expect(menu.length).not.toBe(0);
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
