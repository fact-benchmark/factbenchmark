---
# Page settings
layout: default
keywords:
comments: true

# Micro navigation
micro_nav: true

# Hero section

title: Documentation
description: The API aims to provide access to an independent, collective, shared data resource whereby researchers working in the field can collaborate to push the state of the art in realtime factchecking.

# Page navigation
page_nav:
    prev:
        content: Alpha phase trial
        url: '/trial'
    next:
        content: Manifesto
        url: '/manifesto'
---


# Fact Benchmark API

## Intro

The API aims to provide access to a shared data resource whereby researchers working in the field can collaborate to push the state of the art in realtime factchecking.

As a design goal, where-ever possible the data available via the API is designed to be immutable, non-revokable, timestamped, independently verifiable (signed) and trustless. This design constraint supports our future design goals as well as our data transparency objectives.

There are three aspects to the API.

### A simple REST API for read and create operations

A REST endpoint allows agents to create (```POST```) resources and retrieve (```GET```) resources by id or hash. The following resources are available (as explained in more detail below):
 - claims
 - responses
 - annotations
 - benchmarks
 - content
 - revokes
 - agents

With the exception of the agents end point, update operations are not supported with this API because all operations are designed to be CRDT. However the revoke end point provides a mechanism where by agents (including factbenchmark.org itself) can post  'hide' flags. Operations on the REST API do not honour 'hide' flags but other API operations may. 

The REST API does not provide documented complex query semantics because the GraphQL API provides better support for query based use cases.

### GraphQL Query API for complex queries and notification

A GraphQL end point provides clean semantics for read query operations such as search and aggregation.

A self-documenting example of the GraphQL API is available <a href="https://us1.prisma.sh/miles-thompson-761e5b/factapi/dev">here</a>

The GraphQL end point also provides notifications via subscriptions including:
- claims {all, by_agent, checkworthy&gt;x, truthiness&gt;x, truthiness&lt;x, accepted_by_benchmark}
- responses {all, by_agent, by_claim, related_to_benchmark}
- annotations{all, by_agent, for_claim}

### Bulk Feed API

Finally, there is a read only end point that provides access to data in flattened format for bulk download and analysis purposes. We wish to be guided by our members as to the necessity and preferred format for this end point.

## Inviting feedback

We are currently seeking feedback on many aspects of this project but especially the design of this API. 

Given our desire to support and facilitate research in this areas we would appreciate feedback from our member organisations on points major or minor. We are doing this via the hypothesis.is annotation tool. If you have thoughts about any aspects of this API please feel free to select any text on this page and use the tool to add your comments. Alternativelly feedback can be provided by email to: <a href="mailto:info@factbenchmark.org">info@factbenchmark.org</a>

## REST API

### Claim 

A claim is a short statement which should be falsifiable and of general interest.

**To be regarded as check worthy a claim should be 'falsifiable', in that it:**
* is phrased in a non-ambiguous way
* is not a prediction about the future
* relates to (potentially) verifiable information 
* is not phrased as a question or inquiry
* is not a normative statement ("our policy is small business focused")

**To be regarded as check worthy a claim should also be 'of general interest' due to one or more of the following reasons:**
* it relates to a generally active public discussion or rumor .. or ..
* it is attributed to an important person of interest .. or ..
* it is otherwise important enough to be of importance to a number of people

The ```claim_text``` is the definitive text that should be evaluated for truth or falsity. It doesn't *necessarily* exactly match the text from the source (if any), but should be close to it. 

The ```timestamp``` is the time of attribution to the original claim (if any) 

Example (with expansion of the evidence/attribution)
```json
{
	"self": { "href": "claim/5355b6c6-b620-411b-9eb5-7e73f7146cbf"},
	"claim_text": "Student arrested for shouting slogans against BJP in Tamil Nadu",
	"claim_timestamp": "2018-09-04T04:29:00.000Z",
	"evidence": {
		"attributions": [
			{ "source-url": "https://twitter.com/anindita-guha/status/1036924232595382273",
	  		  "snapshot": { "hash": "3d8c26e642e3b" },
	  		  "submitted_by": { "href": "agent/faktist16"},
			  "created": "2019-01-01T01:23:00.000Z"
	  		}
		],
	},
	"submitted_by": { "href": "agent/faktist16"},
	"created": "2019-01-01T01:23:00.000Z"
}
```

	
### Claim-Response 

In this version of the benchmark check_worthy claims are submitted by members and then, also, evaluated by members.

The first step is to decide whether a claim is check_worthy, then to evaluate its truth or falsehood. 

<img src="../theme/assets/images/claim_lifecycle.png" align="right" width="60%">

It is expected, but not required, that a claim will tend to be evaluated for check-worthiness prior to being evaluated for truthiness, but this is not required. (In some cases the check-worthiness will be self evident from source.)

There are three parts of a claim response, any of which can be provided at any time.

- ```check_worthy``` is a section indicating whether or not the claim is check_worthy.
- ```truth_rating``` is a section indicating whether the claim is true, false, or partially true.
- ```annotation``` is a section for arbitrary data.

A given user can respond multiple times to the same claim (and often will).

Submitting a claim (or providing a truth_rating without a check_worthy section) is taken to be implcit acknowledgement that the claim is check_worthy (equivalent to ```"check_worthy": {"importance":1}```).

#### Check-worthy

The simplest way to respond to a claim is to simply post ```"check_worthy": {"importance":1}``` - which is essentially the same as saying ```"check_worthy": true```.

For example:

```json
{ 
	"ref": { "href": "claim/7dc0051f" },
	"check_worthy": { "importance": 1},
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
} 
```

The ```check_worthiness``` indicates the degree to which the claim is, in fact, "check_worthy". 

Benchmarks will include claims with the highest, 'weighted, consensus importance' in a given time step. So it may also be taken to be an indication of the importance for the benchmark.

Where a ```better-option``` is supplied within a decline-to-rate section, it indicates a related, more check_worthy claim.

Where ```support``` is supplied it indicates content that supports the view put forward.

For example:
```json
{ 
	"ref": { "href": "claim/7dc0051f" },	
	"check_worthy": {
		"check_worthiness": 0.3,
		"decline_to_rate": {
			"reason": "not falsifiable - better options exist",
			"support": { "hash": "3d8c26e642e3b" },
			"ref": { "href": "claim/5d81f18d" }
		}
	},
	"submitted_by": { "href": "agent/joef2016" },
	"created": "2019-01-01T01:23:00.000Z"
}
```

A response may simply indicate that the agent chooses not to rate this claim. In such cases the ```check_worthiness``` is implicitly assumed to be 0.

```json
{ 
	"ref": { "href": "claim/7dc0051f" },
	"check_worthy": {
		"decline-to-rate": {
			"reason": "not falsifiable - statement of opinion"
		}
	},
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
} 
```

#### Truth_rating 

If an agent views a claim as check_worthy they may then assign a 'truth_rating' to it.  Apart from declining to rate, or annotating the claim there are two ways that a truth_rating can be indicated:
* A boolean indicating whether the claim is 'true' or 'false'.
* A boolean true, with a weighting between 0 and 1 indicating 'how true'

The ```weighting``` if any, should be interpreted as the degree to which the statement itself is true, not the confidence that the member has in their rating. 

For example:
```json
{ 
	"ref": { "href": "claim/7dc0051f" },	
	"truth_rating": {
		"truthiness": false,
	},
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
} 
```

Or:
```json
{ 
	"ref": { "href": "claim/7dc0051f" },	
	"truth_rating": {
		"truthiness": 0.3,
		"support": { "hash": "3d8c26e642e3b" }
	},
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
} 
```

#### Annotation

Another form of response to a claim is an annotation.

Amongst other things, this provides a method for responding to a claim, and having this information independently recorded and timestamped, which can allow the agents to store their own data, and make their own intepretations. (In such cases the "FactBenchmark" service acts a little like a simple block chain - only without the block or the chain).

Arbitrary json can be posted in an annotation, for instance:

```json
{ 
	"ref": { "href": "claim/7dc0051f" },	
	"annotation": {"seq":1,"id":"fresh","changes":[{"rev":"1-967a00dff5e02add41819138abb3284d"}]},
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
} 
```

This json will be stored (and, by default returned) as a content-hash, like this:

```json
{ 
	"ref": { "href": "claim/7dc0051f" },	
	"annotation": { "hash": "a2f12df5" },
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
} 
```

Annotations can be placed under the following categories on each claim.
- Attribution
- Related claims
- Evidence (Not supported)
- Evidence (Supporting)

### Benchmark

A benchmark consists of a set of check_worthy claims chosen by some objective criteria. 

One format for benchmarks is to choose one  check_worthy claim each hour and at each stage choose the claim with the highest, weighted importance not included in the benchmark already.

It is not necessary for a claim to be included in the benchmark at the time that ratings are provided, and in many cases it will be added to the benchmark retroactively.

Realtime calculations of agent points will also be made available under the benchmark end point.

```json
{ 
	"name": "December 2018 english twitter benchmark",
	"description": "",
	"claims": [
		{
			"timestamp": "2018-12-11T02:00:00.000Z",
			"ref": { "href": "claim/1ab3f" }
		},
		{
			"timestamp": "2018-12-12T03:00:00.000Z",
			"ref": { "href": "claim/c283" }
		},
		{
			"timestamp": "2018-12-13T04:00:00.000Z",
			"ref": { "href": "claim/4b40" }
		}
	],
	"submitted_by": { "href": "agent/factbenchmark"},
	"created": "2018-12-10T01:23:00.000Z",
}

```

### Agent (Member)

For transparency, (almost) every piece of data in the API is attached to an agent record, including, wherever possible, data created by factbenchmark.org itself, acting as an agent.

```json
{
	"username": "joef2016",
	"url": "https://xyz.com",
	"affiliation": "XYZ Inc",
	"description": "XYZ Agent 2016",
	"profile_image_url":
"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z",
	"self": { "href": "agent/joef2016" },	
} 
```

### Content (Content Cache)

In order to allow and sharing of associated data against claims an end point exists for posting arbitrary data. This data is retrieved by a content-hash of the concetenation of mime-type and data field (not including the submitted_by etc data). If two agents post the same data the content will only be stored once, using the first submission. 

```json
{
	"hash": "a2f12df5",
	"mime-type": "text/html",
	"data": {"..."},
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
}
```

It is also possible to request that content be retrieved by the server, timestamped, cached and signed with the server key,

```json
{
	"hash": "a2f12df5",
	"mime-type": "text/html",
	"data": {"..."},
	"source_url": "https://twitter.com/anindita-guha/status/1036924232595382273",
	"timestamp-captured": "2019-01-01T01:02:00.000Z",
	"signature": "d76a0ee281f84e08b04f73670122f4c9",
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
}
```

The mime-type hash-html should be treated in a special way. When retrieving content of this type any urls or hrefs of the form "hash:xxxx" can be de-referenced by recursive requests to this end-point to retrieve the associated content for that hash, along with the corresponding mime-type. 

## Cross cutting concerns 


#### 24Hr Time Delay

Claim-responses, like all data, eventually become available to all members of the benchmark. However, to ensure independence of submissions (no peeking at other people's answers) claim-responses are not available to other agents, until after a 24hr time delay.

### Submitted-by 

For almost all resources there is a ```submitted_by``` entry automatically created on server with the user id of the authenticated user.

```json
"submitted_by": { "href": "agent/joef2016"},
```

### Created 

For almost all resources there is also a ```created``` entry which is the server measured ISO-8601 UTC timestamp of the time on the server at the moment the entry was submitted.

```json
"created": "2019-01-01T01:23:00.000Z"
```

### Self ref 

The server will allocate ids to objects on submission. REST responses (though not GraphQL responses) will include a self reference for each top level resource.

```json
"self": { "href": { "item-type/6b051a34-e4b8-4c4f-83a2-de2c3c2f144e" } }
```

### Idempotent, CRDT data model

Wherever possible the design of this API is designed to allow for idempotent (or at least CRDT, Conflict-Free Replicated Data) data update models. That means that records, once submitted, cannot be updated, only appended to.

### Hidden log

As part of our guiding principles we aim to:
- have attributions for all data
- allow idempotent data schemas
- not delete any data
- follow a CRDT approach, generally.

As a safety valve, however, _some_ facility for handling unexpected problems is provided by the 'hidden' log, with values like the following. 

```json
{
	"ref": { "href": "claim/1ab3f" },
	"reason": "accidental submission",
	"submitted_by": { "href": "agent/joef2016"},
	"created": "2019-01-01T01:23:00.000Z"
}
```

Hidden log entries will only be accepted by the user with the corresponding ```submitted_by``` reference or by a special factbenchmark admin user (though it will be noted as such).

Special handling is used for hidden annotations and in other cases where it makes sense. Generally speaking however, once content is published to the API it is not revokable.

<!-- 
## Future directions 


### Mixed media and longer form 'claims' 

In the above, we only allow:
* Claims that can be represented in short text form. 

In the future we'd like to extend this model to include:
* Mixed media content, such as urban rumors with images
* Article length content
* Quotes from well known persons, in speeches or other venues (these can be handled, but could do with special handling)

### Collections of related claims that comprise a 'rumor'. 

We would also like to address the relationship between specific wordings of a claim and the existence (in some cases) of a storm of related tweets and representations of the 'same' rumor or idea. 
 -->
<!-- 
### GraphQL

We may build a GraphQL front end on top of the read-only aspects of this API (especially if there is interest in this). This will naturally fall out of the basic design of the REST API. 
 -->
