---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Alpha phase trial
description: We are looking for a limited number of interested parties to take part in our phase I trial.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Modeling truthiness
        url: '/model'
    next:
        content: Documentation
        url: '/documentation'
---

# Phase I trial

We are looking for a limited number of institutions to collaborate with us for our phase I trial in coming weeks.

## Expressions of interest (on hold)
 
Unfortunately, while we experienced good general interest from a number of organizations when this was first published we did not receive sufficient concrete expressions of interest to run the Phase I Trial at that time.

That said, should this situation change we remain open and ready to run a Phase I trial with interested parties. With that in mind we are leaving this content up for now. 

--

However, before we open up the API for wider collaboration we'd like work with smaller number of partners on a preliminary project, to refine our data model and iron out any bugs (conceptual or technical)

If you would like to be involved please leave your contact information below. Please include the username your organisation signed up with originally, if you have it.

{% include signup_form.html %}


## Phase I Trial

For the first trial, we will concentrate on claims in English, of broad interest to a global/English speaking audience.

Current intention is that the trial would be about four weeks long. During this time factbenchmark would ensure there are between five and ten check-worthy claims each day.

Agents will be notified whenever a claim is ready for evaluation by email or other method yet to be agreed.

## Data and evaluations

We will end up with approximately two hundred claims or roughly two thousand data points. 

As with all data, this will be made available for use, but should be considered only a test run and not yet of 'publishable' quality. We aim to generate ten times this much data in an average month going forward, after the model has been more fully calibrated.

During the trial we will make available reports showing how the leaderboard will work, and otherwise examining and visualizing the data  but these will not be 'real time' nor should they be considered a reference 'of publishable quality' during this alpha phase. 

### Hand curation 

During this trial we will curate the check-worthy claims by hand. The mechanisms for submitting, and annotating claims for 'check worthiness' will be in place, but agents will be rated only on their 'truthiness' estimates.

Understanding that agents may need time to build an API client, we can make it possible to respond via the API directly, via a simple website interface, or even via email or csv upload. (We'd appreciate some guidance on which method would be preferred)

### Goals 

The primary goal of the overall project is to provide a platform that is of use to our stakeholders.

However, the primary goal during the Phase I trial is to collect data for Factbenchmark which will enable us to refine our approach and our model so as to better fulfil that function. 

Currently our model, being deliberately 'naive', requires a lot of time to compute. Updates to the leaderboard/s will only be made available periodically in an offline, batch fashion. However, it is hoped that looking at data will also help us refine the way that we compute the model so as to align it's performance characteristics for online use.

To <a href="https://en.wikiquote.org/wiki/Helmuth_von_Moltke_the_Elder">misquote</a> Helmuth von Moltke, "no theoretical model long survives contact with real world data". In that context, we see this alpha phase as a sort of 'sea trials' for our approach, during which we will collect enough data to refine the approach and refine our model.
