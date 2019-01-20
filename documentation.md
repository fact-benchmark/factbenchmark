---
# Page settings
layout: default
keywords:
comments: true

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    next:
        content: Manifesto
        url: '/manifesto'
---



# Fact Benchmark API (v0.5)

This API aims to provide an independent, collective, shared resource by which researchers working in the field can colllaborate to push the state of the art in realtime factcheck detection.

## Claim 

A claim is a short statement which should be 
falsifiable and of general interest.

**Claims should be 'falsifiable' in that:**
* relates to verifiable information 
* is not a prediction about the future
* is not phrased as a question or inquiry
* is not a normative statement ("our policy is small business focused")
* is phrased in an non-ambiguous way

**Claims should be 'of general interest' in that:**
* it relates to an active public discussion (attached to an active rumor)
* or it has enouigh reach or is often repeated in the public discourse to be important
* or it is controversial enough to be of importance to a number of people

If a claim has a source url it also requires a capture date, at which the crawler captured the content. 

with an attribution.

To be interesting for analysis a claim 

+ claim_text: 'Student arrested for shouting slogans against BJP in Tamil Nadu' (string)
+ source: `https://twitter.com/anindita_guha/status/1036924232595382273` (Url) - uri to source, when available
+ attribution: `https://twitter.com/LKC1965` (Attribution Uri) - lowest level identifier of the user/entity to attribute to
+ timestamp: `2018-09-04T04:29:00.000Z` (ISODate) - time stamp of original source
+ raw (Contenthash) - hash of raw content (for/from content cache)
+ submitted_by: `faktist216` (User)
+ hidden_date (ISODate) - date hidden, if hidden


## Rumor 

Claims and articles are sometimes (but not necessarily) 
grouped together underneath rumors. 

A rumor may or may not be 'true', the use of the word simply indicates that it is a matter of interest. 

A rumor should relate to an active public discussion (attached to an active rumor).

A rumor always has a preferred claim or article that outlines the gist of the rumor.

A rumor can only have one preferred claim or article at any time.

The ideal claim or article should nicely summarize the key points present in the wider active discussion.


## Call

A call is an evaluation as to the veracity of a statement. 

This is the primary method by which reputation points are earned in the benchmark. 

There are three four ways that a rumor can be responded to:
* Be classified as simple boolean true or false
* Be classified as true, to some degree between 0 and 1
* Decline to rate as not falsfiable or suggest a better phrasing
* Simply submit arbitrary data against the rumor (which will be indepdently timestamped and preserved for the record)



EXAMPLES
```
{
	call: false,
	ref: "http://fnrb.io/d2x2zf2c4fn2",
}
```

```
{ 
	call: true,
	weighting: 0.3,
	ref: "http://fnrb.io/d2x2zf2c4fn2",
}
```

```
{ 
	ref: "http://fnrb.io/d2x2zf2c4fn2",	
	data: {
		schema: "http://fnrb.io/response/v1"
		decline_to_rate: {
			reason: "not falsifiable - better options exist"
			url: "http://ggw/io/rumors/12123/option/1123"
		}
	}
}
```

```
{ 
	ref: "http://fnrb.io/d2x2zf2c4fn2",
	data: {
		schema: "http://fnrb.io/response/v1"
		decline_to_rate: {
			reason: "not falsifiable - statement of opinion"
		}
	}
} 
```



## Post  

A post is a longer statement with or without attribution. 

To be interesting for analysis a post should be 
falsifiable and of general interest (in the same way
as described for claims).

A post is a more general form of a claim. 

If it can be captured in a short textual statement with attribution, it should be considered a claim. Otherwise, if it lacks attribution, contains multi-media or requires a longer format, it should be considered a post. 

If a post has a url it also requires a capture date, at which the crawler captured the content. 

## Content (cache) 

In order to allow and sharing of associated data in a trust-free way 

The mime-type hash-html should be treated in a special way. When retrieving content of this type any references beginning %#hash#% should be dereferenced by recursive requests to this end point to retrieve the associated content.

+ hash (string)
+ data (string)
+ mime-type (string)
+ timestamp_captured (ISODate)
+ submitted_by (User)
+ signature (string)
