# nmindex-front

This is a simple search page. Very much a WIP. With each search, the page queries a database assembled by the crawler (https://github.com/mccartinj/nmindex-crawl/tree/main). The search phrase runs on the title, full text, and meta description of the page (weighted in that order). The index/rank is postgres's built-in tsvector system with the default dictionaries. The results are kind of a mess tbh
