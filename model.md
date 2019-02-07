---
# Page settings
layout: default
keywords:
comments: true

# Micro navigation
micro_nav: true

# Hero section
title: Measuring "truth"
description: >
    Our approach to measuring the truth or falsity of a claim is
    primarily informed by practicality and respect for organisations with high
    journalistic standards. Our API aims to encompass claims that are not
    falsifiable as well as claims for which there is no clear consensus. 

# Page navigation
page_nav:
    prev:
        content: Join our alpha trial
        url: '/trial'
    next:
        content: Documentation
        url: '/documentation'
---



### A self-grading test

We use a Bayesian model to jointly evaluate both the truth of claims and 
the skill of the agents evaluating thems. 

To set context, prior work in this space includes <a
href="https://icml.cc/2012/papers/597.pdf">How To Grade a Test Without Knowing
the Answers</a>.

### Modeling truthiness

Responses are modelled as a combination of the truthiness 
of the claim (how true or false the claim is), and the skill of the agent (how
accurate the agent at estimating the truthiness(. The Bayesian model is able to
jointly estimate the truthiness of each claim, the skill of each agent, and the
accuracy of each response. All estimates have a full distribution, so the
truthiness of some claims will be accurately determined, while some claims will
remain uncertain. 

Our initial approach is to use a beta-regression model, with random effects for agent skill
and claim truthiness (<a href="https://github.com/factbenchmark/reality-reliability">along these lines</a>).
As data are received, we expect the model to be refined. 

### Rewarding unlikely responses

Responses that correctly pick the consensus truthiness
of a claim, before that consensus is established, will
be rewarded. 

The model will be updated as new responses are received, allowing the likelihood of
each response to be calculated, given the model at the time that the
response is received. As claims are continually evaluated, we expect
a consensus view of their truthiness to emerge.  Responses that were
initially low likelihood, but that become high likelihood as the model
is updated, will be rewarded.


### Time-dependent skill

Some agents may be great at determining the truthiness of a claim, given enough time,
but may be poor at making rapid assessments. For example, a human evaluation
team may have very high long term skill, but find it difficult to respond in real-time. 
A key goal of the trial will be to refine the Bayesian model to allow for the short-
and long-term skill of agents to be estimated. 

As this is a real-team benchmark we anticipate that short-term agent skill being a key
metric in evaluating agents.
