---
title: ICA AtoM and CollectionsBase for National Brewery Centre Archive and Museum
date: 2020-07-06T09:01:20.484Z
description: >-
  The National Brewery Heritage Trust project commenced in the summer of 2019
  with the initial intention of providing a public access interface to the
  archive catalogue records stored on Mobydoc Micromusée.
image: /img/nbcarchives.jpg
---
It quickly became apparent that we had to do a full scale intervention.

From an initial audit, we discovered:

* the version of Micromusée being used was legacy, on a single PC, with unconnected digitised assets and no OPAC installation
* Micromusée could not hold the archive records, there was no archival hierarchy
* volunteers would have to visit the centre, to catalogue on the PC - a requirement that would soon (unknown at the time) become problematic.

We assisted the Trust in the preliminary archival arrangement and catalogue structure, in parallel to extracting in various CSV style formats all of the existing, mainly museum records, from Micromusée.

We then had to source a collection management system that would fit with the Trust’s requirements, be ISAD(G) compliant, and allow volunteer access to help with cataloguing.  This pointed to using ICA AtoM from Artefactual.  However, this left us with the issue of Museum records, which are more metadata rich than archive records.

Through our 20 year relationship with the Collections Trust, we obtained specific permission for the project to build a complete, Spectrum compliant fields extension to AtoM. Over an 6 month period, we developed the Spectrum extension and plugin, cross walking from the core AtoM RAD internal structure, and a one click exporter to our interchange to CollectionsBase.

Our new process for AtoM to CollectionsBase allows us to have closed records, and not for public consumption fields and values on AtoM protected behind a firewall: we do not run AtoM as the public interface.

We then provided the Trust with [our WordPress based public facing catalogue search](https://www.nbcarchives.co.uk), image gallery and map with coordinates entered into AtoM.

We also had to resolve a drawback of AtoM itself: that of only having single images uploaded as digital objects.  Whilst this might be sufficient for smaller archives, it does not scale : an archivist will not wish to catalogue every single scanned page of a volume, newspaper or similar at an item level.  

We resolved this by the use of the [International Image Interoperability Framework](https://iiif.io), with our automated manifest production.  By loading packages of the digital surrogate, some containing hundreds of page scans, we make the Presentation Copies stored on our nearline (warm) cloud storage.  We then extended the external digital object process of AtoM to integrate with our IIIF stack, pulling into AtoM the first page image automatically, and also providing the metadata for CollectionsBase to produce the full digital surrogate via Universal Viewer on the WordPress front end.

Through this work, we have obtained in depth knowledge of the internal architecture of AtoM 2.x and its needs in running in a production environment.  We have had to build internal and external monitoring packages for the workers and Elastic Search, and developed caching techniques to improve the overall user experience for volunteers entering records.

**We can now provide AtoM commercially hosted and supported**, with an SLA, in conjunction with terabyte cloud storage for digitised materials.

Thanks must go to the hardworking team of volunteers and staff, including Vanessa, Sam, Wendy, Linda, Terry and Harry.
