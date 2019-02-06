---
# Page settings
layout: default
keywords:
comments: true

# Hero section
title: Development Roadmap
description: Our intention for the future development of this project

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Documentation
        url: '/documentation'
    next:
        content: Members
        url: '/members'        

---

# Development Roadmap

## Trial data

Seeking feedback.


## == ROUGH NOTES BEYOND THIS LINE ==


Further extensions. 

Block Chain? 

We have designed the api to have CRDT capable data types and to work in a non. primarily decentralize or decentralizable way. Ask whether would be interested in a block chain type solution for this.

For various reasons outside of a block chain we want our data to be immutable, non-revokable, timestamped, independently verifiable, trustless. These things combined suggest a suprsingly good case for a block chain in this case. 



## Future API directions 

After the first round of feedback we have attempted to simplify our API to the bare essentials. There are, however, some features we would like to build back in when we can. 

### Mixed media and longer form 'claims' 

In the above, we only allow:
* Claims that can be represented in short text form. 

In future iterations we'd like to extend this model to include:
* Mixed media posts, such as urban rumors
* Article length content
* Quotes from well known persons, in speeches or other venues (these can be handled, but could do with special handling)

### Collections of related claims that comprise a 'rumor'. 

We would also like to address the relationship between specific wordings of a claim and the existence (in some cases) of a storm of related tweets and representations of the 'same' rumor or idea. 



As an agent..
I can submit a claim for review 
I can submit a claim with annotations in one post
I can add annotations to an existing claim
I can retrieve a claim in its simple form so i can annotate 
I can retrieve a claim with all its annotations and responses
I can see a feed of most recent claims as submitted
I can find claims where the claim text includes matching keywords
I can find claims where the support includes matching keywords or urls
Claims are sorted by date submitted by default
I can retrieve all claims 
I am notified when a new claim matching my query appears