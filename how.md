---
# Page settings
layout: default
keywords:
comments: true

# Hero section
title: How it works
description: What the Realtime Factcheck Benchmark is all about. 

# Author box
author:
    title: About us 
    title_url: 'about'
    external_url: false
    description: Who we are


# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Home
        url: '/' 
    next:
        content: Join our alpha
        url: '/trial'

---

# How it works

## Introduction 

We use a bayesian model to jointly evaluate the truth of claims and (at the same time) the skill of the agents evaluating the claim. As explained on the <a href="/model">model</a> page, jointly modeling these two latent variables allows a principled approach to the problem of assigning reputation and truth - as inspired by papers such as <a href="https://icml.cc/2012/papers/597.pdf">How To Grade a Test Without Knowing the Answers</a>. 

As per our <a href="/manifesto">manifesto</a> all data posted to the benchmark is made public, building up a useful data set for use of future researchers in the field. 

### Our contribution

In the <a href="http://www.fakenewschallenge.org/#faq">FAQ for Fake News Challenge</a> they write that truth labeling poses several challenges:

<ul class="quote">
<li>There exists very little labeled training data of fake vs. real news stories.</li>
<li>The data that does exist is almost all copyright protected.</li>
<li>The data that does exist is extremely diverse and unstructured, making hard to train on.</li>
<li>Any dataset containing claims with associated “truth” labels is going to be contested as biased.</li>
</ul>

It is our intention to address all four of these challenges by providing a unbiased, independent, open, shared data resource of tagged data which all organisations can contribute to. We also hope to go some way towards addressing the question of bias with a principled bayesian approach, as described in the pages of this site.

We should acknowledge the great work already done in the area of 'fake news' benchmarks - such as the <a href="https://www.cs.ucsb.edu/~william/software.html">LIAR</a> benchmark dataset,  the work done by <a href="http://fever.ai/">fever.ai</a>, <a href="https://idir-server2.uta.edu/claimbuster/">claimbuster</a>, <a href="http://www.fakenewschallenge.org">fakenewschallenge.org</a> and many others who have been working on the problem of creating research and benchmark data sets - many of whom we are proud to have as members. 

It is our hope that, together, we can extend and build on this existing work with this real-time shared benchmark.

### Leaderboards 

In a way that is similar to an ongoing Kaggle competitions there are two real-time leaderboards each of which reflects the key parts of the challenge. 
- Finding "check worthy" claims.
- Evaluating those claims for validity. 

Agents get higher scores on either leaderboard if they post an evaluation <i>contributing the most information</i> towards the current consensus for any given claim. 

Because the current 'expected value' regarding the veracity of any given claim updates over time, the corresponding points awarded for any given response can also change over time. (However, 'benchmarks' place an arbitrary time limit around this so as to provide a more publishable benchmark).

Overall, a claim goes through various stages as it moves through the benchmark. On this page we outline the lifecycle of a claim, which creates a good structure to describe the overall system in more detail. 

However, first, let's define our terms.


### Definition of terms

#### Agent 

Our name for accounts on this system. Usually each institution having access to the benchmark will have one agent. FactBenchmark itself has its own agent, so that data entered by ourselves is clearly marked as such. 

#### Claims.

Our name for statements or rumors or quotes that are being evaluated for veracity (and check-worthiness) by the agents.

#### Checkworthy.

The requirements for a claim to be check worthy, are that it is "falsifiable" and "of general interest" as outlined in more detail on the <a href="/documentation/">documentation</a> page.

#### Validity.

Check-worthy claims are evaluated by agents for veracity - they are either 'true', 'false', or 'mixed' as outlined in more detail on the <a href="/documentation/">documentation</a> page. A claim may also be not yet evaluated, not check-worthy, or of indeterminate veracity.

#### Benchmark. 

A benchmark collects together a set of claims that need to be evaluated, and puts a boundary on when the reputation is updated (the scores on the leaderboard at end of the benchmark is considered to be the 'outcome' of the benchmark).

## Typical claim lifecycle 

It should be noted that while it is the intention of this project to allow and even encourage automation, some of these steps require a degree of human curation and judgement. Where needed during the trial, "FactBenchmark" as a project is commited to provide human resourcing (with appropriate level of indepdence and skills) to ensure that the steps will flow through correctly.

For each claim, the steps of the processing are as follows:

#### 1. Discovery

It is expected that claims will generally be 'found in the wild'.  This may involve detecting a spike of social media activity around a particular rumour and finding a representative tweet for that rumor. Or it may involve parsing a speech from a prominent figure and finding check worthy claims that they make. We expect almost all claims to have one or more supporting sources listed in their 'evidence' by way of reaching the threshold for 'general interest'.

#### 2. Phrasing.

Even though claims should ideally have at least one identifiable source it can be hard to find a specific quote with the ideal phrasing for 'falsifiability'. For that reason we allow that a claim 'text' may not exactly match any of its source evidence. It should carry the same basic meaning, or neatly summarize the rumor in such a way as to achieve the threshold for 'falsfiability'.

#### 3. Submission. 

Any agent can submit a claim for review at any time. To ensure a sufficient number of check-worthy claims are available for the first benchmarks, FactBenchmark itself will ensure that staff are available to provide a degree of hand curation and discovery of claims if needed. These will be submitted to the system in the same way as any other agent.

#### 4. Annotations to support check-worthy claim

Any time after a submission agents can provide annotations on claims. 

Annotations are relatively schema-less and open to interpretation. That said there are three categories of annotation:
- Annotations that provide support that the claim was made and of interest
- Annotations that provide support (or refutation) of the claim itself, and 
- Other annotations. 

Every annotation is signed by the agent submitting it but as many annotations as desired can be provided at any time.

During this phase it is expected that at least some evidence of support that the claim was made, and that it is of interest would be provided if the claim hopes to get through the next phase.

#### 5.  Evaluation for check-worthiness

Agents can also post 'responses' to claims at any time. Responses can include the following sections (sometimes one response may include multiple sections):
- 'check-worthy' ('decline to rate', 'better options exist' or 'importance')
- 'truth-rating' (actual estimate of validity)

A "decline to evaluate" response is used when the agent believes the claim is poorly formed, does not have sufficient falsifiability or is not of general interest. Agents are encouraged but not required to provide reasons for a 'decline to evaluate' call. Reasons provided may provide useful feedack for others however.

Alternatively a claim can be rated as 'check-worthy', and, if desired an 'importance' weighting can be provided.

Finally a 'better options exist' response is used to indicate that, while this claim is check-worthy there is another claim - that is substantially similar - that is already in existence, that has better phrasing or that in some other way has better support. In such a case the agent may choose to respond with a 'better options exist' response on the less important claim. The precise definition of 'substantially similar' is deliberately left somewhat loose at this time. Flagging a claim as 'related' or 'duplicate' does not in any way stop that claim from being evaluated for check-worthiness or validity. However some effort may be put into ensuring that benchmarks do not include too many claims that are 'substantially similar' to each other.

#### 6. Acceptance into benchmark. 

In order to avoid unnecessary work by agents, claims are added to a benchmark only once they reach a threshold for 'check-worthiness' required by that benchmark (or more specifically, reach the maximum likelihood estimate for check-worthiness  - as described on the <a href="/model/">model</a> page). These claims will then be available under the API end point for that benchmark. Acceptance into benchmark may also trigger notifications. 

Responses with "truth-rating" estimates are accepted at any time, but for calculation of leaderboard purposes responses received before acceptance will be considered to have been made at the time of acceptance. 

#### 7. Evaluation for validity. 

Responses to claims can contain a 'truth-rating'.

Based on feedback we decided to go for a simple model here. Claims can either be classified as 'true', 'false', or 'partially true'. Partially true claims can have a number included, indicating the amount of truth. This should be interpreted as the amount of truth in the claim, as in 50% true, not the confidence of the agent in the truth of the claim. "Liar liar pants on fire" would correspond to a low truthiness value, whereas "Pinocchio" would correspond to a higher truth value. 

#### 8. Annotation for validity and support. 

Agents may choose to provide annotations that provide support for falsity or truth of the statement. In fact they can pretty much share any anotations they like against the claim. 

That said it is not the intention of the benchmark to attempt to provide comprehensive tools in this space, as a number of very good tools already exist. As a result we expect that many annotations will merely be pointers to other places with useful information. 


#### 9. Benchmark leaderboard.

Calculations for agent reputation are a key part of the system, explained in more detail on the <a href="/model/">model</a> page. The key point to understand is that the reputation is based on the difference between how unlikely the response was at the time it was made and how unlikely it is 'now'. 

A response corresponding to the current consensus has maximum likelihood 'now', which helps reputation points, but to get the most points overall an agent wants to have made that response as early as possible. More specifically they want to have given their response at a time when the expected likelihood was low (given the consensus at the time). The precise caculation involves calculating the wasserstein metric but the key equation is 
reputation =  shift * tan(innovation / accuracy)

That is, the expected likelihood of a given response, given the current consensus estimate for 'truthiness' is compared with the expected likelihood of the given response at the time that the response was given. 
