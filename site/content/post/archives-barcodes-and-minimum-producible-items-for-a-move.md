---
title: Archives Barcodes and Minimum Producible Items for a Move
date: 2018-07-15T23:00:00.000Z
description: >-
  Today I’m working with my development team on the next iteration of our
  document movement system for Archives.
---
We are building a sector specific solution for Archives, including the issuing and returning of ordered documents, both in advance and on the day in the Search Room.

Up until now, our move control system has been working very much like a standard inventory management or warehouse management system : documents are ordered, and these are in containers which have barcodes.  The containers themselves are always moved to the production area, before issuing the document(s) from them.  This is how, for example, Sussex Record Office The Keep works.

What we are now working on is a solution where we are operating in a mixed environment – sometimes, depending on the type of document and container, the production staff only move the document or item itself from the strong rooms.

We are implementing a new iteration of our move system whereby the production ‘pick’ staff create sub-moves of the primary move of the container.  The challenge we now face is, if a second order for another document in the same container comes through, and a different staff member decides to move the container after all, then how to track to return the first to the now moved container.
