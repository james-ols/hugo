---
title: Building the John Gray Centre website and portal
date: 2012-02-21T16:39:00.000Z
description: >-
  The new website portal for the new John Gray Centre was built over 2011, and
  launched early 2012
image: /img/jgc.jpg
---
The new museum, archive, library, HER website comprises a distributed architecture spread across a number of host servers:

* The website front end built from WordPress (self hosted) www.wordpress.org
* Mobile plugin and templates for mobile website
* Our custom developed CollectionsPress plugin providing:
* Configuration of search views over CollectionsBase API (default operators, facets, listing control)
* Object of the day with featured object shortcodes
* Record display with custom XSLT view transforms
* Image browser
* Institution server record display

OpenLayers map integration with Ordnance Survey, Aerial and WMS layers from CollectionsBase Web Map Services

## Challenge One : When a Museum, Archive, HER record is not a post.

The first challenge was to fully integrate the Collection Management Systems cross search responses into WordPress so that they were more than just results:  WordPress needed to ‘see’ them as posts in order to leverage all the WP and 3rd Party plugins that work with posts: commenting, sharing etc.  We didn’t want to duplicate the collections data into WP, but wanted to maintain clean persistent URLs and a wholly separated dataset.   This involved some magic with adding ‘virtual’ posts into wp_query .  Maintaining referential integrity to the persistent record identifiers was the single most challenging part of the WP front end development.

## Challenge Two: When IE7 and IE8 blow up drawing vectors

We started the project with a GeoRSS feed, also powering (after transforming) Augmented Reality.  We ended the project having to also build a full Web Map Tile Server, comprising all the complex archaeology geometry.  Why?  In testing IE7 and IE8, things were fine when the search results had a couple hundred polygons.  We then ramped to many thousands of records and IE7 and IE8 were taking minutes to draw the map.  We found that the SVG performance of legacy IE was orders of magnitude slower than Firefox, Safari (or IE9).  It just wasn’t acceptable.

We therefore had to draw the polygons server side, and came up with a caching tile server over our SOLR search response.  Yes, over a search response: the tiles are drawn on the fly for the user’s search: and we are seeing sub one second rendering of many thousands of results, including using Boolean search operators.

We still produce the photos layer for the geocoded archive and HER photos as a vector layer, as there’s typically only a few dozen in any viewport and IE8 can cope.
