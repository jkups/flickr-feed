# Flickr Public Feed Search

This is a react app to search and display flickr photo feeds, showing a thumbnail, the date it was taken, author and any available tags. It uses the flickr endpoint `https://www.flickr.com/services/feeds/photos_public.gne`.

- ensure you have `Node 18.6.0` installed
- simply clone the repo and run `yarn install`
- confirm everything is working by running `yarn test` or `yarn test:watch`
- a demo is hosted on Netlify @ [here](https://jkups-flickr-search.netlify.app/)

### Things to note

- This app does not seek to solve performance issues with fetching and rendering a large dataset
- You may notice some delay in rendering as you switch from grid to list view with large datasets
- Additional endpoint call is executed when scrolling to bottom of window. The refetch code is simplistic and does not pace refetch.
