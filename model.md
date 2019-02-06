---
# Page settings
layout: default
keywords:
comments: true

# Micro navigation
micro_nav: true

# Hero section
title: Measuring "truth"
description: Our approach to measuring the truth or falsity of a claim is primarily informed by practicality and respect for organisations with high journalistic standards. Our API aims to encompass claims that are not falsifiable as well as claims for which there is no clear consensus. 

# Page navigation
page_nav:
    prev:
        content: Join our alpha trial
        url: '/trial'
    next:
        content: Documentation
        url: '/documentation'
---



### Modeling 'truthiness'

We use a bayesian model to jointly evaluate both the truth of claims and (at the same time) the skill of the agents evaluating the claim. 

To set context, prior work in this space includes <a href="https://icml.cc/2012/papers/597.pdf">How To Grade a Test Without Knowing the Answers</a>.

Some of our own earlier work on bayesian modeling of problems with this type of uncertainty is <a href="https://github.com/factbenchmark/reality-reliability">outlined here</a>. At this time our work on this model remains a work in progress, but it is advanced enough that we can at least outline the basic idea here.

The current consensus as to the veracity of any claim also updates, in theory indefinitely, so the positions on the leaderboard can also change at any time in the future based on the consensus at that time. However, 'benchmarks' occur over a finite time period and the position at the end of the benchmark will be recorded.

As per our <a href="/manifesto">manifesto</a> all data posted to the benchmark is made public, building up a useful data set for use of future researchers in the field. 

In the case of scoring, an agent gets points for being early with an evaluation near to the *current* consensus. (This is explained more on the model page.) 


Our benchmark compares early estimates to after-the fact consensus. 

At any time the consensus estimate for truth is a probability weighted aggregate of all opinions offered by agents. 

Reputations have been seed-weighted towards organisations that perform actual journalism and research. 

### Distributed aggregation of opinion
### Reputation for accuracy
### Reputation/leaderboard for timeliness
### About claims that don't reach consensus