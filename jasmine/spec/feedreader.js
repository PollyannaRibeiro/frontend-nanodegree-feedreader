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

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
