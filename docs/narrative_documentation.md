
## Claim 

A claim is any short statement with an attribution.

To be interesting for analysis a claim should be 
falsifiable and of general interest.

**'Falsifiable' in that:**
* relates to verifiable information 
* is not a prediction about the future
* is not phrased as a question or inquiry
* is not a normative statement ("our policy is small business focused")
* is phrased in an non-ambiguous way

**'Of general interest' in that:**
* it relates to an active public discussion (attached to an active rumour)
* or it has enouigh reach or is often repeated in the public discourse to be important
* or it is controversial enough to be of importance to a number of people

If a claim has a source url it also requires a capture date, at which the crawler captured the content. 



## Rumour 

Claims and articles are sometimes (but not necessarily) 
grouped together underneath rumours. 

A rumour may or may not be 'true', the use of the word simply indicates that it is a matter of interest. 

A rumour should relate to an active public discussion (attached to an active rumour).

A rumour always has a preferred claim or article that outlines the gist of the rumour.

A rumour can only have one preferred claim or article at any time.

The ideal claim or article should nicely summarize the key points present in the wider active discussion.


## Call




call {
	call: bool?
	weighting: double? // optional
	ref: url
	data: {} // more info goes here 
}


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
			url: "http://ggw/io/rumours/12123/option/1123"
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

content-hash
mime-type
data
timestamp_captured
submitted_by
signature

The mime-type hash-html should be treated in a special way. When retrieving content of this type any references beginning %#hash#% should be dereferenced by recursive requests to this end point to retrieve the associated c