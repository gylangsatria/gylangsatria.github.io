---
title: "Why I Built a YouTube Downloader with yt-dlp and Docker"
date: 2026-07-07
layout: post
tags: [docker, yt-dlp, youtube-dl, open-source, automation, bash]
description: The story behind why I built my own YouTube downloader tool — and why yt-dlp was the obvious choice.
---

Let me be honest: I didn't build this tool because I wanted to reinvent the wheel. I built it because I was tired of broken wheels.

Every time I needed to download a video from YouTube or Twitter, I found myself going through the same frustrating cycle. I'd search for a download website, deal with sketchy ads and malware-ridden pages, and hope the site actually worked. Usually, it didn't.

Or worse — I'd use a terminal-based downloader that was supposed to work, only to find that it had stopped working because YouTube changed something on their end, and the project hadn't been updated in months.

So I decided to build something that would just work. Every time.

## The Problem with Existing Tools

For years, **youtube-dl** was the go-to tool for downloading videos from the internet. It was reliable, open-source, and supported hundreds of sites.

But around 2020, the project's development slowed dramatically. YouTube kept changing their player, which broke extraction. Pull requests and bug reports started piling up with no response. The tool I relied on was becoming unreliable.

I wasn't alone in noticing this. The community needed something better, something actively maintained, something that could keep up with the constant changes on platforms like YouTube.

That's when **yt-dlp** emerged.

## Why I Chose yt-dlp

yt-dlp is a fork of youtube-dl that started in late 2020, created specifically to solve the maintenance problem. And honestly, it's been a game-changer.

### Active Development

The most important factor for me was **active maintenance**. yt-dlp merges patches quickly, adds extractors aggressively, and ships regular builds. When a platform changes something that breaks downloads, the yt-dlp team usually responds within days — not months.

I can't afford to have my download tools stop working on a regular basis. With yt-dlp, I don't have to worry about that.

### Speed That Actually Matters

Remember downloading videos that took forever because fragments were downloaded one after another? YouTube-dl did that. yt-dlp doesn't.

With **concurrent fragment downloads**, yt-dlp downloads video fragments in parallel using multiple threads. The difference is dramatic — especially on long playlists or slow connections.

### Real Features I Actually Use

Beyond just working, yt-dlp comes with features that make my life easier:

- **SponsorBlock integration** — automatically marks or skips sponsored segments in videos
- **Chapter splitting** — splits videos into individual files by chapter
- **Better format selection** — automatically chooses higher resolutions and better codecs like VP9 or AV1
- **Plugin architecture** — extend functionality with custom extractors

These aren't just nice-to-haves. They're features that save me time and effort every single day.

### Support for 1,700+ Sites

YouTube isn't the only platform I need. yt-dlp supports over 1,700 websites, including Twitter, BlueSky, Steam, Facebook, and Instagram. When I wanted Twitter/X support in my downloader, yt-dlp already had it built in.

## Why I Containerized It

Even with a great tool like yt-dlp, there's still the problem of dependencies. yt-dlp needs FFmpeg, Python, various libraries, and sometimes cookies from your browser to work with sites that require authentication.

Installing all of this on every machine I use is a pain. And dealing with permission issues on Linux — where downloaded files are owned by root and you can't touch them — is even worse.

Docker solves both problems:

1. **Everything is isolated** — all dependencies are inside the container, so I don't need to install anything on my host system
2. **Auto UID/GID** — files are created with my user's permissions, not root's, so I can access them immediately
3. **Works anywhere** — the same setup works on Linux, Windows, and macOS

## The Real Test: Making It "Just Work"

The ultimate test of any tool is whether it works when you need it to. With version 2.1 of YouTube Downloader, it does.

- Drop a URL in the queue file, and it downloads automatically
- Twitter/X videos? Same command, works perfectly
- Already downloaded a URL before? It skips it automatically
- Audio from SoundCloud? Auto-detected and saved as MP3

No special flags to remember. No manual file management. No permission issues. Just working.

## Quick Start

Getting started is as simple as cloning the repo and running a single command:

```bash
git clone https://github.com/gylangsatria/yt-downloader.git
cd yt-downloader
./run.sh "https://youtube.com/watch?v=..."
```

The container builds itself on first run — no manual dependency installation needed.

### What's Under the Hood

The tool uses **yt-dlp** with **FFmpeg** inside a lightweight Alpine Linux container. It handles format selection, audio detection, and permission mapping automatically. Version 2.1 also includes **SQLite-based history tracking** and **duplicate URL detection**, so you never download the same video twice.

For more details, check out the full README and documentation on GitHub:

> **Repository:** [github.com/gylangsatria/yt-downloader](https://github.com/gylangsatria/yt-downloader)

## The Philosophy Behind the Tool

At its core, this tool represents what I believe about technology: **the best tools are the ones that disappear**.

I shouldn't have to think about how to download a video. I shouldn't have to install packages, debug dependency issues, or track what I've already downloaded. I should just be able to run a command and move on.

yt-dlp makes that possible. Docker makes that reliable. And this tool brings it all together in a way that works, every single time.

That's why I built it. And that's why I'll keep maintaining it.