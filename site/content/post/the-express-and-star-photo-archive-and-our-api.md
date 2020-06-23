---
title: The Express and Star Photo Archive and our API
date: 2019-03-04T17:28:14.341Z
description: >-
  Today, 4 March 2019 we’ve launched the first phase of the Express and Star
  photo archive. This project is an excellent example of Create Once, Publish
  Everywhere – for it uses the catalogue metadata and our search API via
  Wolverhampton Archives that was developed more than 10 years ago.
---
The metadata and catalogue search is also available for the Photo Archive on Black Country History: [http://blackcountryhistory.org/collections/search/?q=dc.identifier:D-EXP/P/*](http://blackcountryhistory.org/collections/search/?q=dc.identifier:D-EXP/P/*)

where it is shown in aggregation with the other regional archives, and is itself a Collection within Wolverhampton Archive aggregated set.

We have approached other projects using our API centred approach for business archives within City archives – for example the Minton Archive and the Michelin Archive.

What is key to this approach is that we have not imported the archival descriptions into the front end Collection Management Systems. They are kept quite separate : this effect can be seen with these searches:

[http://blackcountryhistory.org/collections/search/?q=dc.identifier:D-EXP/P/*](http://blackcountryhistory.org/collections/search/?q=dc.identifier:D-EXP/P/*)

[http://www.wolverhamptonart.org.uk/collections/search?s=dc.identifier:D-EXP/P/*](http://www.wolverhamptonart.org.uk/collections/search?s=dc.identifier:D-EXP/P/*)

<https://photo-archive.expressandstar.co.uk/collections/search?s=*:*>

The front end Collection Management System search plugin is then locked to a Collection (can be Series, sub series) to just search within. We can also produce thematic front ends – this is how our First World War websites work, they are subject ‘locked’ to keyword filters.

An API centred approach means that our projects can be both Content Management System agnostic (swap from WordPress to Drupal to Joomla to Umbraco) and Collection Management System agnostic – retain the persistent identifiers and swap between CALM and AtoM, for example.

Our approach also offers rapid tooling : as Wolverhampton Archives is already a CollectionsBase user and aggregation partner, already had a CALM ingress transform, bringing in the Express and Star archive and producing a front end was straightforward. We look forward to the Express and Star project delivering nearly half a million photos in the coming years.
