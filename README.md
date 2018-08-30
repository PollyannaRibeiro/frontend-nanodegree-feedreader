# Feed Reader Testing 

The app displays news from one or multiple RSS feeds.

These tests will check:

1. if `allFeeds` variable is valid
2. if each feed in `allFeeds` are not empty and has a name and URL defined
3. if the menu element is hidden by default and displays when clicked and hide when clicked again
4. it has at least a single entry element on feed container
5. when a new feed is loaded by the `loadFeed` function, the content actually changes.


**What did I learn in this project?**

1. How to use Jasmine to write a number of tests against a pre-existing application. 
2. The concept of Test-driven development - write tests first, all tests will initially fail. And then start writing application code to make these tests pass.

**How to run this on your local machine:** 

Download or Clone this repository to your local machine and open the **index.html** in a web browser.
