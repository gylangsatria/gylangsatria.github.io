---
title: "Important Lessons from a VirusTotal False Positive That Hit My Blog"
date: 2026-06-24
layout: post
tags: [blog]
description: Lessons learned from a VirusTotal false positive that flagged my personal blog as malicious, and the journey to get it cleared.
---

Even though I have often written about various technology news, this time I want to share a personal experience that might also serve as a lesson for friends who manage their own websites or blogs.

Some time ago, I noticed that the domain `gylang.my.id` and the blog at `blog.gylang.my.id` received several security flags on VirusTotal indicating potential phishing or suspicious activity.

Of course, this was quite surprising, especially since the website is my personal blog for sharing writing and documentation about technology.

## At First, I Thought There Was Malware

When I first saw these flags, honestly, I was worried.

Because phishing or malicious labels usually appear when a website is indeed indicated to be spreading malware, performing dangerous redirects, or trying to steal user data.

However, after conducting a thorough inspection of the entire website content, the results showed no malicious files, suspicious scripts, illegal redirects, or any indication of server compromise.

## The Cause Turned Out to Be Quite Simple

After investigating further, I found that the main cause likely came from a premium Blogger theme I had been using for a long time.

The theme used several third-party JavaScript files that had not been updated for quite some time.

Although those scripts were not harmful, some security engines apparently considered certain patterns in the old scripts as suspicious indicators.

This kind of thing actually happens quite often in the cybersecurity world and is known as a **false positive**—a condition where a website or file is considered dangerous when it actually contains no real threat.

## The Fix Process I Undertook

To ensure everything was truly safe, I took the following steps:

- Removed old scripts that were no longer used
- Updated all Blogger theme components
- Cleaned unnecessary code
- Checked all pages using various security scanners
- Ensured there were no hidden redirects or third-party script injections
- Re-tested all domains and subdomains

After that process was complete, I also contacted several security vendors to request a re-evaluation of the classifications that had previously appeared.

One of them was Bitdefender, where I submitted a review request so they could re-verify the domain that had been flagged.

## Security Vendors Began Removing Flags

After the review process proceeded, several security vendors started removing the previously appearing detections.

This shows that the issue was indeed more of a false positive than an actual security threat.

Of course, this kind of process takes time because each vendor has different analysis mechanisms and database update schedules.

But most importantly, all the components that caused the previous detections have been fixed and cleaned.

## Lessons Learned

From this experience, I learned that managing a website is not just about creating content.

We also have to pay attention to security, theme updates, third-party scripts, and domain reputation regularly.

Because sometimes a website can receive security flags not because it was hacked, but because it uses old components that modern detection systems consider suspicious.

As this article is being written, the blog at `blog.gylang.my.id` and the domain `gylang.my.id` have gone through a cleaning process, audit, and re-verification. Visitors can access the site as usual without worrying about the security issues that previously appeared.
