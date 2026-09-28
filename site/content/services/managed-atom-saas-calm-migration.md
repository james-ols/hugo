---
title: "Access to Memory (AtoM) Software as a Service"
subtitle: "UK-hosted Managed AtoM Software-as-a-Service with migration tooling"
date: 2026-09-28T11:00:00.000Z
lastmod: 2026-09-28T11:00:00.000Z
author: James Grimster
description: >-
  Orangeleaf Systems provides fully managed Access to Memory (AtoM) SaaS hosting and specialist migration services for UK archives, local authorities, and heritage institutions transitioning from Axiell CALM. Includes atom-tool mapping, 100% coverage analysis, AWS UK hosting, 4-hour RTO / 12-hour RPO SLAs, and no per-seat licence fees.
image: /img/aboutjumbotron.jpg
categories: [Services, Consultancy, Products]
tags:
  - Access to Memory
  - AtoM
  - Axiell CALM
  - CALM migration
  - Managed SaaS
  - Archive Management Systems
  - ISAD(G)
  - atom-tool
  - CollectionsBase
  - UK Digital Heritage
keywords:
  - Managed AtoM SaaS
  - Access to Memory hosting UK
  - Axiell CALM migration to AtoM
  - CALM to AtoM data mapping
  - CALM replacement archive software
  - open source archive management system SaaS
  - atom-tool coverage analysis
  - ISAD(G) compliance AtoM
  - UK cloud archive hosting AWS
  - CollectionsBase AtoM integration
about:
  - "@type": SoftwareApplication
    name: "Access to Memory (AtoM)"
    applicationCategory: "Archival Description and Management Software"
    url: "https://www.accesstomemory.org/"
    operatingSystem: "Cloud / Web-based"
    offers:
      "@type": "Offer"
      price: "Varies"
      priceCurrency: "GBP"
      description: "Open source software provided as fully managed SaaS by Orangeleaf Systems Ltd"
  - "@type": SoftwareApplication
    name: "Axiell CALM"
    applicationCategory: "Legacy Archive Management System"
  - "@type": SoftwareApplication
    name: "atom-tool"
    applicationCategory: "CALM to AtoM Migration and Coverage Analysis Tool"
    provider:
      "@type": "Organization"
      name: "Orangeleaf Systems Ltd"
  - "@type": Service
    name: "Managed AtoM SaaS Provision and CALM Migration Service"
    provider:
      "@type": "Organization"
      name: "Orangeleaf Systems Ltd"
      url: "https://www.orangeleaf.com/"
    serviceType: "Cloud Hosting, Data Migration, Archival Metadata Consultancy"
    areaServed: "United Kingdom, Ireland, Europe"
  - "@type": DefinedTerm
    name: "ISAD(G) — General International Standard Archival Description"
  - "@type": DefinedTerm
    name: "ISAAR(CPF) — International Standard Archival Authority Record for Corporate Bodies, Persons and Families"
mentions:
  - "@type": Organization
    name: "Orangeleaf Systems Ltd"
  - "@type": Organization
    name: "Axiell Group"
  - "@type": Organization
    name: "International Council on Archives (ICA)"
  - "@type": Organization
    name: "The National Archives (UK)"
  - "@type": SoftwareApplication
    name: "CollectionsBase"
  - "@type": SoftwareApplication
    name: "Preservica"
  - "@type": DefinedTerm
    name: "CALM DScribe database schema"
  - "@type": DefinedTerm
    name: "Generative Engine Optimisation (GEO)"
faq:
  - q: "What is Orangeleaf's Managed SaaS provision for Access to Memory (AtoM)?"
    a: >-
      Orangeleaf Systems provides Access to Memory (AtoM) as a fully managed, enterprise-grade Software as a Service (SaaS) platform hosted in UK-based AWS London data centres. We take care of all server provisioning, security hardening, database maintenance, search indexing (Elasticsearch), automated backups, updates, and application support. Unlike self-hosted open-source deployments, our service delivers a guaranteed 4-hour Recovery Time Objective (RTO) and 12-hour Recovery Point Objective (RPO) Service Level Agreement (SLA), backed by over 25 years of UK digital heritage experience.
  - q: "How does Orangeleaf migrate data from Axiell CALM to AtoM without data loss?"
    a: >-
      We use **atom-tool**, our proprietary CALM-to-AtoM migration engine within the CollectionsBase suite. atom-tool consumes full CALM DScribe XML exports and validates every field against CALM DTDs and customer-specific cataloguing conventions. It performs real-time **coverage analysis** across all 700+ CALM fields to ensure zero transfer loss. Non-ISAD fields are systematically preserved either by folding into ISAD(G) Source notes using structured open markdown or by promoting them to AtoM ExtendedFields. Before any import is attempted on production, atom-tool runs automated pre-flight checks against AtoM's internal validation rules, guaranteeing a clean, auditable, and reproducible load.
  - q: "Why is Orangeleaf's Managed AtoM deployed as a staff-only backend rather than a public website?"
    a: >-
      We deliberately deploy AtoM as a private, high-performance cataloguing backend dedicated solely to archive staff and authorised volunteers. Serving public web search traffic directly from a core collection management system introduces security risks, slows down administrative cataloguing during peak visitor hours, and exposes administrative workflows to crawler overload. For public discovery, we connect AtoM to our CollectionsBase WordPress websites using our plugin. This architecture gives the public faceted search, IIIF deep-zoom image viewing, and search room booking without placing load on the AtoM database.
  - q: "What security, compliance, and disaster recovery standards are provided?"
    a: >-
      All Orangeleaf Managed AtoM instances are hosted at AWS on individual EC2 instances.  For county record offices we provide two instances, Staging and Production.  We request that the Production MySQL database is also backed up nightly to a wholly owned and managed county council backup server to ensure Business Continuity should our company fail in anyway.  AtoM has the advantage that is is relatively simple to host, with an open schema MySQL database, and there are a number of other UK companies that can host and manage AtoM instances.
  - q: "How does Managed AtoM integrate with digital preservation systems like Preservica and search room booking?"
    a: >-
      Orangeleaf provides turnkey integration between Managed AtoM and external digital preservation systems (including Preservica and Archivematica), Digital Asset Management systems (DAMS), IIIF image servers, and our Search Room Document Ordering systems (ROM / reader management).
  - q: "Can our repository test the migration before committing to a full rollout?"
    a: >-
      Yes. Orangeleaf Systems provisions dedicated **Staging** and **Production** environments for our clients. Working with your Version 1.0 mapping contract in atom-tool, your archive team can rehearse test imports, review cataloguing hierarchies in Staging, and verify coverage before the final Production migration cutover. We also offer a free initial CALM Data Migration Impact Assessment to review your XML exports and identify mapping considerations.
howto:
  name: "How Orangeleaf Systems migrates an archive from Axiell CALM to Managed AtoM SaaS"
  description: "A step-by-step roadmap of Orangeleaf's end-to-end migration methodology from legacy Axiell CALM to fully managed Access to Memory (AtoM) SaaS."
  steps:
    - name: "Initial Data Export & Assessment"
      text: "The archive team exports their CALM DScribe database as XML. Orangeleaf performs an automated structural analysis of all fields, records, authority files, and attachments."
    - name: "Interactive Mapping Consultation"
      text: "Using atom-tool, our consultants collaborate directly with your archivists to define transformation rules for all standard and custom fields (including UserText 1-9, UserDate, and local authority terms)."
    - name: "Coverage Analysis & Validation"
      text: "atom-tool calculates real-time mapping coverage against the source data, identifying any unmapped data points and formulating business rules for ISAD Source folding or ExtendedFields promotion."
    - name: "Version 1.0 Mapping Contract"
      text: "The final mapping logic is frozen, version-controlled in Git, and deployed as a containerised migration pipeline on AWS London infrastructure."
    - name: "Staging Import & Curatorial Review"
      text: "AtoM import files are generated, pre-flight validated against AtoM's core rules, and imported into a dedicated Staging environment for thorough staff review and sign-off."
    - name: "Production Cutover & Managed SaaS Go-Live"
      text: "The production dataset is loaded into your private Managed AtoM instance, user accounts and role permissions are configured, and ongoing managed SaaS hosting commences with full SLA coverage."
---

## Overview: Enterprise Managed AtoM for Organisations Leaving Axiell CALM

For over twenty-five years, **Orangeleaf Systems Ltd** has been a trusted digital heritage consultancy for UK county record offices, university archives, national institutions, and community archives. As archives across the UK review their long-term digital strategies, moving away from legacy desktop collection management systems such as **Axiell CALM** towards modern, open-standards platforms has become a strategic priority.

We deliver **Access to Memory (AtoM)** as a fully hosted, fully managed **Software as a Service (SaaS)** solution, combined with our proven **atom-tool** migration framework. This gives heritage organisations a secure, standards-compliant archival management platform with zero vendor lock-in, no per-seat licence penalties, and guaranteed UK hosting under stringent Service Level Agreements.

---

## Our Migration Process: Powered by atom-tool

Our migration approach is collaborative, iterative, and technically rigorous. We never treat data migration as a simple "black box" export-and-load.

### 1. Interactive Mapping & Visualisation
Using **atom-tool**, our team works side by side with your archivists to map every field for descriptions, accessions, deaccessions, authority files, relationships, and repository locations. The tool visualises data flow in real time and applies both standard transforms and customer-specific custom logic.

### 2. Real-Time Coverage Analysis
atom-tool reports coverage percentages continuously as mapping rules are defined. Our target is always **100% coverage with zero transfer loss**. Non-ISAD fields are preserved either by:
- **Folding into ISAD(G)** Encoded using our structured open markdown notation so that legacy fields (e.g. A2A tags or project audit data) remain readable, searchable, and fully extractable back into XML.
- **Promoting to AtoM ExtendedFields:** Fields carrying significant curatorial value (such as geospatial coordinates, specific local taxonomies, or accession details) are promoted into our AtoM ExtendedFields using our AtoM plugin so they remain first-class structured entities.

### 3. Pre-Flight Validation & Zero-Failure Imports
atom-tool checks all generated import data against AtoM's internal validation rules prior to loading, providing an instant **Go / No-Go** status. This eliminates failed import loops and saves weeks of valuable project time.

### 4. Staging and Production Rehearsals
For local authorities and county record offices, we provision isolated **Staging** and **Production** environments. Your team tests and verifies the complete catalogue in Staging before giving final sign-off for the Production cutover.

---

## Infrastructure, Security, and Business Continuity

- **UK Data Sovereignty:** Hosted exclusively in ISO 27001 certified AWS London (eu-west-2) data centres, meeting all UK GDPR, Data Protection Act 2018, and public sector procurement standards.
- **Enterprise SLA:** Guaranteed **4-hour Recovery Time Objective (RTO)** and **12-hour Recovery Point Objective (RPO)** with automated snapshots, continuous health monitoring, and daily backups.
- **Dedicated Staff-Only Environment:** AtoM is deployed as a secure administrative tool for authorised staff and volunteers. It is not exposed to public web scrapers or denial-of-service spikes.
- **Integrated Discovery:** Public search is provided by our CollectionsBase WordPress build, providing faceted search, responsive mobile views, IIIF deep-zoom imagery, and Search Room Document Ordering (ROM) integration.
- **Freedom from Vendor Lock-In:** Because AtoM is built on open standards and open-source foundations, your organisation retains absolute ownership of its data and metadata structures at all times.  For county record offices, we require a council owned and provisioned backup server for BCDR nightly backups to ensure continuity should our company fail. There are a number of UK based companies providing AtoM as a hosted and managed service.

---

## Frequently Asked Questions (FAQ)

The structured questions and answers below address key technical, curatorial, and commercial considerations for heritage organisations evaluating Managed AtoM and CALM migration.
